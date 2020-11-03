using Entities.Api;
using Entities.Api.Client;
using Master.Repository;
using System;
using System.Data.SqlClient;

namespace Master.Service
{
    public class UserListV1 : BaseService
    {
        IDapperUserRepository repository;

        public UserListV1(IDapperUserRepository _repository) 
        {
            repository = _repository;
        }

        public bool Exec ( LocalNetwork network, Entities.Api.Configuration.AuthenticatedUser au, string pesquisa, ref UserList dto )
        {
            try
            {
                using (var db = GetConnection(network))
                {
                    var lstClient = repository.GetUsers(db, "%" + pesquisa + "%");

                    dto.total = lstClient.Count;
                    dto.results = lstClient;
                    
                    foreach (var item in dto.results)
                    {
                        // extra processing
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
