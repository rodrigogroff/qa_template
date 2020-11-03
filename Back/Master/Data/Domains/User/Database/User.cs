using System;

namespace Master.Infra.Entity.Database
{
    public partial class User
    {
        public long id { get; set; }
        public string stEmail { get; set; }
        public string stLogin { get; set; }
        public string stPassword { get; set; }
        public DateTime? dtLastLogin { get; set; }
    }
}
