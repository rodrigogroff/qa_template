using Master;
using Master.Service;
using Entities.Api.Product;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTesting
{
    [TestClass]
    public class UTstProductListing : UTstUserBase
    {
        [TestMethod]
        public void OK()
        {
            #region - code - 

            var network = new LocalNetwork() { sqlServer = connStr };
            var repo = new FakeRepo_Product();

            var srv = new SrvProductListingV1(repo) {
                _sendEmail = false
            };

            DtoProductListingResult ret = new DtoProductListingResult();

            if (!srv.Exec(network, new DtoProductListing
            {
                sTag = "Livro",
                page = 1,
                pageSize = 10,
                _language = "0"
            }, ref ret))
                Assert.Fail();

            #endregion
        }
    }
}
