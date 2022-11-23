using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using WebApplication1.Models;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace WebApplication1.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase {

        private readonly IConfiguration _configuration;
        public ProductController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("getproducts")]

        public List<Product> GetProducts()
        {
            //return LoadList();
            return LoadListFromDb();
        }


        [HttpGet]
        [Route("getproductsbyid")]
        public List<Product> GetProductsById(string itemid)
        {
            // return LoadList().Where(e => e.Id == itemid).ToList();
            return LoadListFromDb().Where(e => e.Id == itemid).ToList();

        }



        [HttpPost]
        [Route("PostProduct")]

        public string PostProduct(Product obj)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            SqlCommand cmd = new SqlCommand("Insert into product (Id,Name,price) values('"+ obj.Id +"','" + obj.Name +"','"+obj.price+"')", con);
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
           
            //List<Product> products = new List<Product>();
            //products.Add(obj);
            return "Product Added successfully";

        }


        [HttpDelete]
        [Route("DeleteProduct")]
        public string DeleteProduct(string PId)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            SqlCommand cmd = new SqlCommand("Delete from product where Id = '" +PId +"'", con);
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();

            return "Product Deleted successfully";

        }

        /*[HttpPut]
        [Route("UpdateProduct")]
        public string UpdateProduct(string PId)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            SqlCommand cmd = new SqlCommand("Update product where Id = '" + PId + "'", con);
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();

            return "Product Deleted successfully";

        }*/


        private List<Product> LoadListFromDb()
        {
            List<Product> products = new List<Product>();

            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            SqlCommand cmd = new SqlCommand("select * from product", con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);

            for(int i=0; i< dt.Rows.Count; i++)
            {
                Product obj = new Product();
                obj.Id = dt.Rows[i]["Id"].ToString();
                obj.Name = dt.Rows[i]["Name"].ToString();
                obj.price = int.Parse(dt.Rows[i]["price"].ToString());
                products.Add(obj);
            }

            return products;

        }



            private List<Product> LoadList()
        {
            List<Product> products = new List<Product>();

            Product obj = new Product();
            obj.Id = "101";
            obj.Name = "Item1";
            obj.price = 5000;
            products.Add(obj);

            obj = new Product();
            obj.Id = "102";
            obj.Name = "Item3";
            obj.price = 1000;
            products.Add(obj);

            obj = new Product();
            obj.Id = "103";
            obj.Name = "Item3";
            obj.price = 200;
            products.Add(obj);

            obj = new Product();
            obj.Id = "";
            obj.Name = "Item3";
            obj.price = 2000;
            products.Add(obj);
            
            return products;

        }

    }

}
