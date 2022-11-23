using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace WebApplicationDapper.Model
{
    public class Product
        {
        [Key]
            public int ProductId { get; set; }
            public string Name { get; set; }
            public double Price { get; set; }

            public int Quantity { get; set; }

        }
    }

