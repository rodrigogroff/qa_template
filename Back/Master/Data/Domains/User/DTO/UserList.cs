using System.Collections.Generic;

namespace Entities.Api.Client
{
    public class UserList
    {
        public long total { get; set; }
        public List<Master.Infra.Entity.Database.User> results { get; set; }
    }
}
