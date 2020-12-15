using Entities.Api.Login;
using Master;
using Master.Repository;
using Master.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Api.Master.Controllers
{
    public partial class CtrlCheckToken : MasterController
    {
        public CtrlCheckToken(IOptions<LocalNetwork> _network) : base(_network) { }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/CheckToken_v1")]
        public ActionResult Post([FromBody] DtoCheckToken obj)
        {
            var repo = new DapperUserRepository();
            var srv = new SrvCheckTokenV1(repo);

            if (!srv.Exec(network, obj))
                return BadRequest(srv.Error);

            return Ok(new { st_MasterVersion });
        }
    }
}
