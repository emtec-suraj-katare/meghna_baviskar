using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplicationDapper.Model;

namespace WebApplicationDapper.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ProductRepository productRepository;
        public ProductController()
        {
            productRepository = new ProductRepository();
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {   
            return productRepository.GetAll();
        }

        [HttpGet("{id}")]
        public Product Get (int id)
        {
            return productRepository.GetProductById(id);
        }

        [HttpPost]
        public void post([FromBody]Product prod)
        {
            if (ModelState.IsValid)
                productRepository.Add(prod);
        }

        [HttpPut("{id}")]
        public void put(int id, [FromBody] Product prod)
        {
            prod.ProductId = id;
            if (ModelState.IsValid)
                productRepository.Update(prod);
        }

        [HttpDelete]
        [Route("deleteproducts")]
        public void Delete(int id)
        {
            productRepository.Delete(id);
        }

        
        
    }
}
