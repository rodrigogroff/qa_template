using System;

namespace Master.Infra.Entity.Database
{
    public partial class ProductCatalog
    {
        public long id { get; set; }        
        public long fkProduct { get; set; }
        public long fkProductCatalog { get; set; }
    }
}
