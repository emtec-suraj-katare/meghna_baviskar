import React from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList'

const UserList = () => {
    const data = [
      {
        Id:1,
        Name:"Ram",
        Address:"Pune",
        MobileNo:9435464789,
        Password:123
      },
      {
        Id:2,
        Name:"Raj",
        Address:"mumbai",
        MobileNo:9935464789,
        Password:654
      },
      {
        Id:3,
        Name:"Shivraj",
        Address:"Pune",
        MobileNo:8835464789,
        Password:456
      },
      {
        Id:4,
        Name:"Shiv",
        Address:"satara",
        MobileNo:9435464999,
        Password:567
      }
    ]
    const createTable = () => {
        return (
            <table className='table table-bordered table-hover'>
                <thead><br />
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>MobileNo</th>
                        <th>Password</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) => {
                        return (
                            <tr>
                                <td>{data.Id}</td>
                                <td>{data.Name}</td>
                                <td>{data.Address}</td>
                                <td>{data.MobileNo}</td>
                                <td>{data.Password}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
  return (
    <div className='container'>
      <h3 align="center">User List</h3>
        {createTable()}
        <button type="button" class="btn btn-dark"><Link to="/BookList">Book List</Link></button>
    </div>
  )
}

export default UserList