using Api.Master.Controllers;
using Entities.Api.Product;
using Master.Infra.Entity.Database;
using Master.Repository;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Npgsql;

namespace Integration
{
    [TestClass]
    public class InTstProductListing : TstBaseIntegration
    {
        CtrlProductListing Setup()
        {
            #region - code - 

            var tst = new CtrlProductListing(null) { network = new Master.LocalNetwork { sqlServer = connStr } };

            SetupDatabase();

            using (var db = new NpgsqlConnection(connStr))
            {
                db.Open();

                var repo = new DapperProductRepository();

                repo.InsertProduct(db, new Product { stName = "Livro", nuPrice = 12345, stDesc = "Livro desc" });
                repo.InsertProductCatalog(db, new ProductCatalog { stTag = "Livro" });
                repo.InsertProductCatalogLink(db, new ProductCatalogLink { fkProduct = 1, fkProductCatalog = 1 });

                db.Close();
            }

            return tst;

            #endregion
        }

        [TestMethod]
        public void OK()
        {
            var tst = Setup();

            var ret = tst.Post(new DtoProductListing
            {                
                sTag = "Livro",
                nuCategory = null,
                page = 0,
                pageSize = 10,
                _language = "0",
            });

            if (ret.ToString().Contains("BadRequest"))
                Assert.Fail();

            var OkResult = ret as Microsoft.AspNetCore.Mvc.OkObjectResult;
            var dtoResp = OkResult.Value as DtoProductListingResult;

            if (dtoResp.totalRecords != 1)
                Assert.Fail();

            if (dtoResp.results.Count != 1)
                Assert.Fail();
        }

        [TestMethod]
        public void Fail_page_params()
        {
            var tst = Setup();

            var ret = tst.Post(new DtoProductListing
            {
                sTag = "Livro",
                nuCategory = null,
                page = null,
                pageSize = null,
                _language = "0",
            });

            if (!ret.ToString().Contains("BadRequest"))
                Assert.Fail();
        }
    }
}
