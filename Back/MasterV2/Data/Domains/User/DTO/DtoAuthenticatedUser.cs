﻿
namespace Entities.Api.Configuration
{
    public class DtoAuthenticatedUser : DtoBase
    {
        public string _id { get; set; }
        public string email { get; set; }
        public string login { get; set; }        
    }
}
