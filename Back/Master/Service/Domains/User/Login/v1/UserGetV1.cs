using Entities.Api;
using Master.Infra.Entity.Database;
using Master.Repository;
using System;
using System.Data.SqlClient;

namespace Master.Service
{
    public class UserGetV1 : BaseService
    {
        IDapperUserRepository repository;

        public UserGetV1(IDapperUserRepository _repository) 
        {
            repository = _repository;
        }

        public bool Exec ( LocalNetwork network, Entities.Api.Configuration.AuthenticatedUser au, long id, ref User dto )
        {
            try
            {
                using (var db = GetConnection(network))
                {
                    dto = repository.GetUser(db, id);
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
