
namespace Entities.Api.Product
{
    public class DtoProduct : DtoBase
    {
        public string serial { get; set; }
        public string name { get; set; }
        public string brand { get; set; }
        public string category { get; set; }
    }
}
