using Dapper;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;

namespace WebApplicationDapper.Model
{
    public class ProductRepository
    {
        private string connectionString;
        public ProductRepository()
        {
            connectionString = @"data source = PUN-NB-LE3B578\SQLEXPRESS;Initial catalog = ProductDapper;Integrated Security = true;";


        }
        public IDbConnection Connection
        {
            get
            {
                return new SqlConnection(connectionString);
            }

        }

        public void Add(Product prod)
        {
            using (IDbConnection dbconnection = Connection)
            {
                string sQuery = @"Insert Into Products (Name,Quantity,Price) Values(@Name,@Quantity,@Price)";
                dbconnection.Open();
                dbconnection.Execute(sQuery, prod);
            }
        }


        public IEnumerable<Product> GetAll()
        {
            using (IDbConnection dbconnection = Connection)
            {
                string sQuery = @"Select * from Products";
                dbconnection.Open();
                return dbconnection.Query<Product>(sQuery);
            }
        }

        public Product GetProductById(int id)
        {
            using (IDbConnection dbconnection = Connection)
            {
                string sQuery = @"Select * from Products where ProductId=@Id";
                dbconnection.Open();
                return dbconnection.Query<Product>(sQuery, new { Id = id }).FirstOrDefault();
            }
        }

        public void Delete(int id)
        {
            using (IDbConnection dbconnection = Connection)
            {
                string sQuery = @"Delete from Products where ProductId=@Id";
                dbconnection.Open();
                dbconnection.Execute(sQuery, new { Id = id });
            }
        }


        public void Update(Product prod)
        {
            using (IDbConnection dbconnection = Connection)
            {
                string sQuery = @"UPDATE Products SET Name=@Name, Quantity=@Quantity,Price = @Price where ProductId=@ProductId";
                dbconnection.Open();
                dbconnection.Query(sQuery, prod);
            }
        }


    }
}
