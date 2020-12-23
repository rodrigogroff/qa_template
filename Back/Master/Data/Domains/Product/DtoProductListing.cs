
namespace Entities.Api.Product
{
    public class DtoProductListing : DtoBase
    {
        public string sTag { get; set; }
        public long? nuCategory { get; set; }
        public int? page { get; set; }
        public int? pageSize { get; set; }
    }
}
