﻿using Entities.Api;
using Entities.Api.Login;
using Master.Repository;
using System;
using System.Collections.Generic;

namespace Master.Service
{
    public class SrvML_CheckToken : SrvBaseService
    {
        #region - code - 

        List<List<string>> multi_language = new List<List<string>>
        {
            new List<string> // english
            {
                "Ops, something went wrong", /* 0 */
                "Email not found", /* 1 */
                "Invalid Token", /* 2 */
            },
            new List<string> // spanish
            {
                "Ops, algo salió mal", /* 0 */
                "El correo electrónico no encontrado", /* 1 */
                "Simbolo no valido", /* 2 */
            },
            new List<string> // pt-br
            {
                "Ops, algo deu errado", /* 0 */
                "Email não encontrado", /* 1 */
                "Token inválido", /* 2 */
            },
        };

        public string getLanguage(string indexLanguage, int messageIndex)
        {
            return multi_language[Convert.ToInt32(indexLanguage)][messageIndex];
        }

        #endregion
    }

    public class SrvCheckTokenV1 : SrvML_CheckToken
    {
        IDapperUserRepository repository;

        public SrvCheckTokenV1(IDapperUserRepository _repository) 
        {
            repository = _repository;
        }

        public bool Exec ( LocalNetwork network, DtoCheckToken obj )
        {
            try
            {
                using (var db = GetConnection(network))
                {
                    var user = repository.GetUserBySocial(db, obj.sID);

                    if (user == null)
                    {
                        Error = new DtoServiceError
                        {
                            message = getLanguage(obj._language, 1),
                            debugInfo = "[1]"
                        };

                        return false;
                    }

                    if (user.stToken != obj.sToken)
                    {
                        Error = new DtoServiceError
                        {
                            message = getLanguage(obj._language, 2),
                            debugInfo = "[1]"
                        };

                        return false;
                    }
                }
    
                return true;
            }
            catch (Exception ex)
            {
                Error = new DtoServiceError
                {
                    message = getLanguage(obj._language, 0),
                    debugInfo = ex.ToString()
                };

                return false;
            }
        }        
    }
}
