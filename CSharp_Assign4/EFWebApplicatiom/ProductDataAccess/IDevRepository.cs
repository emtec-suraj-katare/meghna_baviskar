using ProductRest;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ProductDataAccess
{
    public interface IDevRepository
    {
        Task<IEnumerable<Dev>> GetAllDevAsync();
        Task<Dev> GetDevByIdAsync(int id);
        void AddDev(Dev dev);
        void UpdateDev(Dev dev);    
        void DeleteDev(int id);
        Task<IEnumerable<Dev>> GetAllDevSync();
    }
}
