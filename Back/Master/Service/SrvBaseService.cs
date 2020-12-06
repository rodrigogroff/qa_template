using Entities.Api;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Mail;
using System.Security.Cryptography;
using Npgsql;

namespace Master.Service
{
    public class SrvBaseService 
    {
        public bool _doNotSendEmail = false;

        public DtoServiceError Error;        

        #region - const values - 

        public const string _emailSmtp = "slayer.vortigo@zohomail.com";
        public const string _passwordSmtp = "Gustavo@2012";
        public const string _smtp = "smtp.zoho.com";
        public const int _smtpPort = 587;

        #endregion

        public NpgsqlConnection GetConnection(LocalNetwork network)
        {
            #region - code - 

            var ret = new NpgsqlConnection(network.sqlServer);
            ret.Open();
            return ret;

            #endregion
        }

        public int I(string myNumber)
        {
            return Convert.ToInt32(myNumber);
        }

        public DateTime D(string myDate)
        {
            return new DateTime(I(myDate.Substring(6)),
                                I(myDate.Substring(3, 2)),
                                I(myDate.Substring(0, 2)));
        }

        public void SendEmail(string email, string subject, string texto, List<string> attachs = null)
        {
            if (_doNotSendEmail)
                return;

            #region - code - 

            try
            {
                MailMessage message = new System.Net.Mail.MailMessage(_emailSmtp, email, subject, texto);

                SmtpClient smtp = new SmtpClient
                {
                    Host = _smtp,
                    Port = _smtpPort,
                    Credentials = new System.Net.NetworkCredential(_emailSmtp, _passwordSmtp),
                    EnableSsl = true
                };

                message.IsBodyHtml = true;

                if (attachs != null)
                    foreach (var item in attachs)
                        message.Attachments.Add(new Attachment(item));

                smtp.Send(message);
            }
            catch (Exception ex)
            {

            }

            #endregion
        }

        public string OnlyNumbers(string cpf)
        {
            #region - code - 

            var strResp = "";

            for (int i = 0; i < cpf.Length; i++)
            {
                var c = cpf[i];
                if (Char.IsNumber(c))
                    strResp += c.ToString();
            }

            return strResp;

            #endregion
        }

        public static string DESdeCript(string dados, string chave = "12345678")
        {
            #region - code - 

            byte[] key = System.Text.Encoding.ASCII.GetBytes(chave);//{1,2,3,4,5,6,7,8};
            byte[] data = new byte[8];

            for (int n = 0; n < dados.Length / 2; n++)
            {
                data[n] = (byte)Convert.ToInt32(dados.Substring(n * 2, 2), 16);
            }

            DES des = new DESCryptoServiceProvider();
            des.Key = key;
            des.Mode = CipherMode.ECB;
            ICryptoTransform crypto = des.CreateDecryptor();
            MemoryStream cipherStream = new MemoryStream();
            CryptoStream cryptoStream = new CryptoStream(cipherStream, crypto, CryptoStreamMode.Write);
            cryptoStream.Write(data, 0, data.Length);
            crypto.TransformBlock(data, 0, 8, data, 0);
            System.Text.ASCIIEncoding enc = new System.Text.ASCIIEncoding();
            string retorno = enc.GetString(data);

            return retorno;

            #endregion
        }
    }
}
