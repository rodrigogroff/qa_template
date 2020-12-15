using System;

namespace Master.Infra.Entity.Database
{
    public partial class User
    {
        public long id { get; set; }
        public string stEmail { get; set; }
        public string stName { get; set; }
        public Boolean bActive { get; set; }
        public Boolean bAdmin { get; set; }
        public Boolean bTokenized { get; set; }
        public string stSocialID { get; set; }
        public string stPassword { get; set; }
        public DateTime? dtLastLogin { get; set; }
        public DateTime? dtCreation { get; set; }
        public DateTime? dtTokenExpires { get; set; }
        public string stToken { get; set; }
    }
}
