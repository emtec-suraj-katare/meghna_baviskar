using Dapper;
using Microsoft.Extensions.Configuration;
using ProductRest;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;

namespace ProductDataAccess
{
   public class DevRepository :IDevRepository
    {
        protected readonly IConfiguration _configuration;
        public DevRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IDbConnection Connection
        {
            get
            {
                return new SqlConnection(_configuration.GetConnectionString("DeveloperDbConnection"));
            }
        }

        public void AddDev(Dev dev)
        {
            try
            {
                using(IDbConnection dbConnection = Connection)
                {
                    dbConnection.Open();
                    string query = @"Insert Into Products(Name,Quantity,Price) Values(@Name,@Quantity,@Price)";
                    dbConnection.Execute(query, dev);
                }

            }catch(Exception ex)
            {
                throw ex;
            }
        }

        public void DeleteDev(int id)
        {
            
            try
            {
                using (IDbConnection dbConnection = Connection)
                {
                    dbConnection.Open();
                    string query = @"Delete From Products where id =@ProductId";
                    dbConnection.Execute(query, new { ProductId = id });
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public async Task<IEnumerable<Dev>> GetAllDevAsync()
        {
            try
            {
                using (IDbConnection dbConnection = Connection)
                {
                    dbConnection.Open();
                    string query = @"Select * from Products";
                    return await dbConnection.QueryAsync<Dev>(query);
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Task<IEnumerable<Dev>> GetAllDevSync()
        {
            throw new NotImplementedException();
        }

        public async Task<Dev> GetDevByIdAsync(int id)
        {
            try
            {
                    using (IDbConnection dbConnection = Connection)
                    {
                        dbConnection.Open();
                        string query = @"Select * From Products where id =@ProductId";
                        return await dbConnection.QueryFirstOrDefaultAsync<Dev>(query, new { ProductId = id });
                    }
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }

       
        public void UpdateDev(Dev dev)
        {
            try
            {
                using (IDbConnection dbConnection = Connection)
                {
                    dbConnection.Open();
                    string query = @"Update Products Set Name=@Name, Quantity=@Quantity Price=@Price";
                    dbConnection.Execute(query,dev);
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
