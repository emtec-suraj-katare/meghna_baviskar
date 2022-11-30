using DatabaseProject.Interfaces;
using DatabaseProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RWebApi.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;
        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        [HttpGet]
        public ActionResult GetEmployees()
        {
            try
            {
                var employees = _employeeRepository.GetEmployees();
                return Ok(employees);
            }
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status417ExpectationFailed, ex.Message);
            }
        }

        [HttpGet]
        public ActionResult GetEmployeeById(int Id)
        {
            try
            {
                var employees = _employeeRepository.GetEmployeeById(Id);
                return Ok(employees);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status417ExpectationFailed, ex.Message);
            }
        }

        [HttpPost]
        public ActionResult AddEmployee(Employee employee)
        {
            try
            {
                var addedEmployee = _employeeRepository.AddEmployee(employee);
                return Ok(addedEmployee);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status417ExpectationFailed, ex.Message);
            }
        }
    }
}
