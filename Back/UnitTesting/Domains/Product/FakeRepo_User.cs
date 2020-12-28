using Master.Infra.Entity.Database;
using Master.Repository;
using Npgsql;
using System.Collections.Generic;

namespace UnitTesting
{
    public class FakeRepo_Product : IDapperProductRepository
    {
        #region - code - 

        public Brand GetBrand(NpgsqlConnection db, long id)
        {
            return null;
        }

        public Category GetCategory(NpgsqlConnection db, long id)
        {
            return null;
        }

        public Product GetProduct(NpgsqlConnection db, long id)
        {
            return null;
        }

        #endregion
        public List<Product> GetProducts(NpgsqlConnection db, string sTag, long? nuCategory, int page, int pageSize)
        {
            if (sTag == "Livro")
            {
                return new List<Product>()
                {
                    new Product
                    {
                        id = 1,
                        stName = "Livro",
                        nuPrice = 123456,
                        stDesc = "Livro Desc"
                    },
                };
            }

            return null;
        }

        public void InsertProduct(NpgsqlConnection db, Product obj)
        {
            
        }

        public void InsertProductCatalog(NpgsqlConnection db, ProductCatalog obj)
        {

        }

        public void InsertProductCatalogLink(NpgsqlConnection db, ProductCatalogLink obj)
        {
        }
    }
}
