using Entities.Api;
using Entities.Api.Configuration;
using Master.Infra.Entity.Database;
using Master.Repository;
using System;
using System.Data.SqlClient;

namespace Master.Service
{
    public class UserNewV1 : BaseService
    {
        IDapperUserRepository repository;

        public UserNewV1(IDapperUserRepository _repository) 
        {
            repository = _repository;
        }

        public bool Exec ( LocalNetwork network, AuthenticatedUser au, User dto )
        {
            try
            {
                using (var db = GetConnection(network))
                {
                    var curUser = repository.GetUser(db, Convert.ToInt64(au._id));

                    if (dto.id == 0)
                    {
                        dto.stPassword = dto.stLogin;
                        
                        repository.InsertUser(db, dto);
                    }                        
                    else
                    {
                        var currentPassword = repository.GetUser(db, dto.id).stPassword;

                        dto.stPassword = currentPassword;                        

                        repository.UpdateUser(db, dto);
                    }                        
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
