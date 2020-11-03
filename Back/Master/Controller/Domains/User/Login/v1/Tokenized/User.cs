using Entities.Api.Client;
using Master.Infra.Entity.Database;
using Master.Repository;
using Master.Service;
using Microsoft.AspNetCore.Mvc;

namespace Api.Master.Controllers
{
    public partial class MasterController
    {        
        [HttpGet]
        [Route("api/users")]
        public ActionResult<UserList> UserListing(string search)
        {
            var au = GetCurrentAuthenticatedUser();

            var repo = new DapperUserRepository();
            var srv = new UserListV1(repo);
            var dto = new UserList();

            if (!srv.Exec(network, au, search, ref dto))
                return BadRequest(srv.Error);

            return Ok(dto);
        }

        [HttpGet]
        [Route("api/user")]
        public ActionResult<User> UserGet(long id)
        {
            var au = GetCurrentAuthenticatedUser();

            var repo = new DapperUserRepository();
            var srv = new UserGetV1(repo);
            var dto = new User();

            if (!srv.Exec(network, au, id, ref dto))
                return BadRequest(srv.Error);

            return Ok(dto);
        }

        [HttpPost]
        [Route("api/userNew")]
        public ActionResult UserNew([FromBody] User data)
        {
            var au = GetCurrentAuthenticatedUser();

            var repo = new DapperUserRepository();
            var srv = new UserNewV1(repo);

            if (!srv.Exec(network, au, data))
                return BadRequest(srv.Error);

            return Ok(new { });
        }
    }
}
