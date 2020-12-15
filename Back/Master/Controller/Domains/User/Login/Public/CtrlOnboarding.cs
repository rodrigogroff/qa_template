using Entities.Api.Login;
using Master;
using Master.Repository;
using Master.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Api.Master.Controllers
{
    public partial class CtrlOnboarding : MasterController
    {
        public CtrlOnboarding(IOptions<LocalNetwork> _network) : base(_network) { }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/onboarding_v1")]
        public ActionResult Post([FromBody] DtoOnboarding obj)
        {
            var repo = new DapperUserRepository();
            var srv = new SrvOnboardingV1(repo);

            if (!srv.Exec(network, obj))
                return BadRequest(srv.Error);

            return Ok(new { st_MasterVersion });
        }
    }
}
