using Entities.Api;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Net.Mail;
using System.Security.Cryptography;

// test database
using SqlLocalDb;

namespace Master.Service
{
    public class BaseService
    {
        public const string _defaultError = "Ops, something went wrong";

        public const string _emailSmtp = "slayer.vortigo@zohomail.com";
        public const string _passwordSmtp = "Gustavo@2012";
        public const string _smtp = "smtp.zoho.com";
        public const int _smtpPort = 587;

        public bool IsDebugOn = false;

		#region - test database - 

		public LocalDatabase localDb;

		public string db_create = @"

IF EXISTS (Select name from sys.databases WHERE name = 'JG')  DROP DATABASE JG
GO

CREATE DATABASE JG
GO

USE [JG]
GO
/****** Object:  Table [dbo].[Client]    Script Date: 08/10/2020 10:11:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[User](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[stEmail] [varchar](200) NULL,
	[stLogin] [varchar](50) NULL,
	[stPassword] [varchar](20) NULL,
	[dtLastLogin] [datetime] NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
";

        #endregion

        public ServiceError Error;

        public SqlConnection GetConnection(LocalNetwork network)
        {
            var conn_string = network.GetSqlServer();

            if (conn_string == null)
            {
                #region - test database - 

                localDb = new LocalDatabase();

                var ret = localDb.GetConnection();

				ret.ExecuteScript(db_create);

				if (network.databasePopulation != null)
					ret.ExecuteScript(network.databasePopulation);

				return ret;

				#endregion
			}
            else
                return new SqlConnection(conn_string);
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
            #region - code - 

            try
            {
                MailMessage message = new System.Net.Mail.MailMessage(_emailSmtp, email, subject, texto );

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
