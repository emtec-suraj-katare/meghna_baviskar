using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DatabaseProject.DatabaseContext;
using DatabaseProject.Models;

namespace DatabaseProject.Interfaces
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly SqlServerContext _sqlServerContext;

        public EmployeeRepository(SqlServerContext sqlServerContext)
        {
            _sqlServerContext = sqlServerContext;
        }

        public List<Employee> GetEmployees()
        {
            var lstEmployees = _sqlServerContext.Employee.ToList();
            return lstEmployees;
        }

        public Employee GetEmployeeById(int id)
        {
            var employee = _sqlServerContext.Employee.FirstOrDefault(x=>x.EId==id);
            return employee;
        }
        
        public Employee AddEmployee(Employee employee)
        {
            _sqlServerContext.Employee.Add(employee);
            _sqlServerContext.SaveChanges();
            return employee;
        }
    }
}
