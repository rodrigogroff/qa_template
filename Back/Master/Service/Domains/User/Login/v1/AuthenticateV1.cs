using Entities.Api;
using Entities.Api.Configuration;
using Entities.Api.Login;
using Master.Repository;
using System;

namespace Master.Service
{
    public class AuthenticateV1 : BaseService
    {
        IDapperUserRepository repository;

        public AuthenticateV1 (IDapperUserRepository _repository) 
        {
            repository = _repository;
        }

        bool ValidadeRequest(LoginInformation login)
        {
            #region - code - 

            if (string.IsNullOrEmpty(login.email))
            {
                Error = new ServiceError { message = "Invalid login or password" };
                return false;
            }

            if (string.IsNullOrEmpty(login.password))
            {
                Error = new ServiceError { message = "Invalid login or password" };
                return false;
            }

            return true;

            #endregion
        }

        public bool Exec (  LocalNetwork network,                   // input
                            LoginInformation login,                 // input
                            ref AuthenticatedUser loggedUser )      // output
        {
            try
            {
                if (!ValidadeRequest(login))
                    return false;
                
                using (var db = GetConnection(network))
                {
                    var user = repository.GetUserByEmail(db, login.email);

                    if (user == null)
                    {
                        Error = new ServiceError
                        {
                            message = "Invalid user authentication",
                            debugInfo = "user == null"
                        };

                        return false;
                    }
                    
                    if (user.stPassword != login.password)
                    {
                        Error = new ServiceError
                        {
                            message = "Invalid user authentication",
                            debugInfo = "user.stSenha != login.senha"
                        };

                        return false;
                    }

                    user.dtLastLogin = DateTime.Now;

                    repository.UpdateUser(db, user);

                    loggedUser._id = user.id.ToString();
                    loggedUser.email = user.stEmail;
                    loggedUser.login = user.stLogin;
                }
    
                return true;
            }
            catch (Exception ex)
            {
                Error = new ServiceError
                {
                    message = _defaultError,
                    debugInfo = ex.ToString()
                };

                return false;
            }
        }        
    }
}
