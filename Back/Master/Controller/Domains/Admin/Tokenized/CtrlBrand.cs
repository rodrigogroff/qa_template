﻿using Entities.Api.User;
using Master.Infra.Entity.Database;
using Master.Repository;
using Master.Service;
using Microsoft.AspNetCore.Mvc;

namespace Api.Master.Controllers
{
    public partial class MasterController
    {        
        [HttpGet]
        [Route("api/brands")]
        public ActionResult<DtoUserList> brands(string search)
        {
            var au = GetCurrentAuthenticatedUser();

            var repo = new DapperUserRepository();
            var srv = new SrvUserListV1(repo);
            var dto = new DtoUserList();

            if (!srv.Exec(network, au, search, ref dto))
                return BadRequest(srv.Error);

            return Ok(dto);
        }

        [HttpGet]
        [Route("api/brand")]
        public ActionResult<User> brand(long id)
        {
            var au = GetCurrentAuthenticatedUser();

            var repo = new DapperUserRepository();
            var srv = new SrvUserGetV1(repo);
            var dto = new User();

            if (!srv.Exec(network, au, id, ref dto))
                return BadRequest(srv.Error);

            return Ok(dto);
        }
    }
}
