using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace Cache
{
    public class DtoCache
    {
        public string _tag { get; set; }

        public string _value { get; set; }
    }

    [AllowAnonymous]
    [ApiController]
    public partial class MasterController : ControllerBase
    {
        private IMemoryCache _memoryCache;
        
        public MasterController(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("api/getCache")]
        public ActionResult getCache([FromBody] string tag)
        {            
            string data; 
            if (!_memoryCache.TryGetValue(tag, out data))
                return BadRequest();

            return Ok(data);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/updateCache")]
        public ActionResult updateCache([FromBody] DtoCache obj)
        {
            _memoryCache.Set(obj._tag, obj._value);
            return Ok();
        }
    }
}
