using Entities.Api.Login;
using Master;
using Master.Repository;
using Master.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Api.Master.Controllers
{
    public partial class CtrlResendToken : MasterController
    {
        public CtrlResendToken(IOptions<LocalNetwork> _network) : base(_network)
        {

        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/resendToken_v1")]
        public ActionResult Post([FromBody] DtoResendToken dto)
        {
            var repo = new DapperUserRepository();
            var srv = new SrvResendTokenV1(repo) {
                _sendEmail = this._sendEmail
            };

            if (!srv.Exec(network, dto))
                return BadRequest(srv.Error);

            return Ok(new
            {

            });
        }
    }
}
