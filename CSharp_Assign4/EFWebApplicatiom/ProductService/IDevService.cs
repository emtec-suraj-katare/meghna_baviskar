using ProductRest;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ProductService
{
    public interface IDevService
    {
        Task<IEnumerable<Dev>> GetAllDev();
        Task<Dev> GetDevById(int id);
        void AddDev(Dev dev);
        void UpdateDev(Dev dev);
        void DeleteDev(int id);
    }
}
