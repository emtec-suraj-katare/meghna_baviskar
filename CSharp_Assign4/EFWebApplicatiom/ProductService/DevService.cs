using ProductDataAccess;
using ProductRest;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ProductService
{
    public class DevService : IDevService
    {
        protected readonly IDevRepository _devRepository;
       

        public DevService(IDevRepository devRepository)
        {
            _devRepository = devRepository;
        }

        public void AddDev(Dev dev)
        {
            _devRepository.AddDev(dev);
        }

        public void DeleteDev(int id)
        {
            _devRepository.DeleteDev(id);
        }

        public Task<IEnumerable<Dev>> GetAllDev()
        {
            return _devRepository.GetAllDevSync();
        }

        public Task<Dev> GetDevById(int id)
        {
            return _devRepository.GetDevByIdAsync(id);
        }

        public void UpdateDev(Dev dev)
        {
            _devRepository.UpdateDev(dev);
        }
    }
}
