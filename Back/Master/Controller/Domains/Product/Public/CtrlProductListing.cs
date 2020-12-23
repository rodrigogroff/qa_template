﻿using Entities.Api.Product;
using Master;
using Master.Repository;
using Master.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Api.Master.Controllers
{
    public partial class CtrlProductListing : MasterController
    {
        public CtrlProductListing(IOptions<LocalNetwork> _network) : base(_network) { }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/productListing_v1")]
        public ActionResult Post([FromBody] DtoProductListing obj)
        {
            var repo = new DapperProductRepository();
            var srv = new SrvProductListingV1(repo);            
            var ret = new DtoProductListingResult();

            if (!srv.Exec(network, obj, ref ret))
                return BadRequest(srv.Error);

            return Ok( ret );
        }
    }
}
