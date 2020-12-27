using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Cache
{
    [Authorize]
    [ApiController]
    public partial class MasterController : ControllerBase
    {
        public MasterController()
        {
            
        }        
    }
}
