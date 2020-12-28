using Dapper;
using Master.Infra.Entity.Database;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Master.Repository
{
    public interface IDapperProductRepository
    {
        List<Product> GetProducts(NpgsqlConnection db, string sTag, long? nuCategory, int page, int pageSize);
        void InsertProduct(NpgsqlConnection db, Product obj);
        void InsertProductCatalog(NpgsqlConnection db, ProductCatalog obj);
        void InsertProductCatalogLink(NpgsqlConnection db, ProductCatalogLink obj);

        Brand GetBrand(NpgsqlConnection db, long id);
        Category GetCategory(NpgsqlConnection db, long id);
        Product GetProduct(NpgsqlConnection db, long id);
    }

    public class DapperProductRepository : IDapperProductRepository
    {
        public void InsertProduct(NpgsqlConnection db, Product obj)
        {
            using (var cmd = new NpgsqlCommand("INSERT INTO \"Product\"(\"stName\",\"fkCountry\",\"fkBrand\",\"fkCategory\",\"nuPrice\",\"stDesc\") " +
                "VALUES(@stName,@fkCountry,@fkBrand,@fkCategory,@nuPrice,@stDesc);", db))
            {
                cmd.Parameters.AddWithValue("stName", ((object)obj.stName) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("fkCountry", ((object)obj.fkCountry) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("fkBrand", ((object)obj.fkBrand) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("fkCategory", ((object)obj.fkCategory) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("nuPrice", ((object)obj.nuPrice) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("stDesc", ((object)obj.stDesc) ?? DBNull.Value);

                cmd.ExecuteNonQuery();
            }
        }

        public void InsertProductCatalog(NpgsqlConnection db, ProductCatalog obj)
        {
            using (var cmd = new NpgsqlCommand("INSERT INTO \"ProductCatalog\"(\"stTag\") " +
                "VALUES(@stTag);", db))
            {
                cmd.Parameters.AddWithValue("stTag", ((object)obj.stTag) ?? DBNull.Value);

                cmd.ExecuteNonQuery();
            }
        }

        public void InsertProductCatalogLink(NpgsqlConnection db, ProductCatalogLink obj)
        {
            using (var cmd = new NpgsqlCommand("INSERT INTO \"ProductCatalogLink\"(\"fkProduct\",\"fkProductCatalog\") " +
               "VALUES(@fkProduct,@fkProductCatalog);", db))
            {
                cmd.Parameters.AddWithValue("fkProduct", ((object)obj.fkProduct) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("fkProductCatalog", ((object)obj.fkProductCatalog) ?? DBNull.Value);

                cmd.ExecuteNonQuery();
            }
        }

        Brand IDapperProductRepository.GetBrand(NpgsqlConnection db, long id)
        {
            return db.QueryFirstOrDefault<Brand>("select * from \"Brand\" where id = " + id);            
        }

        Category IDapperProductRepository.GetCategory(NpgsqlConnection db, long id)
        {
            return db.QueryFirstOrDefault<Category>("select * from \"Category\" where id = " + id);
        }

        Product IDapperProductRepository.GetProduct(NpgsqlConnection db, long id)
        {
            return db.QueryFirstOrDefault<Product>("select * from \"Product\" where id = " + id);
        }

        List<Product> IDapperProductRepository.GetProducts(NpgsqlConnection db, string sTag, long? nuCategory, int page, int pageSize)
        {
            var query = "with cat as ( select * from \"ProductCatalog\" where \"stTag\" = 'Livro' ) " +
                "select p.* from \"Product\" p, cat, \"ProductCatalogLink\" pcl " +
                "where cat.\"id\" = pcl.\"fkProductCatalog\" and pcl.\"fkProductCatalog\" = p.id ";

            return db.Query<Product>( query ).ToList();
        }
    }
}
