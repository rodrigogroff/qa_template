using Entities.Api.Configuration;
using Entities.Api.Login;
using Master;
using Master.Repository;
using Master.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Api.Master.Controllers
{
    public partial class Authenticate_v1 : MasterController
    {
        public Authenticate_v1(IOptions<LocalNetwork> _network) : base(_network)
        {
            
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/authenticate_v1")]
        public ActionResult AuthenticateAssociado([FromBody] LoginInformation obj)
        {
            var auth = new AuthenticatedUser();
            var repo = new DapperUserRepository();            
            var srv = new AuthenticateV1(repo);

            if (!srv.Exec(network, obj, ref auth))
                return BadRequest(srv.Error);
                        
            var token = ComposeTokenForSession(auth);
            
            return Ok( new 
            {
                token,
                user = auth,                
            });
        }
    }
}
