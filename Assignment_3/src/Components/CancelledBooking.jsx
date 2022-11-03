import React from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList'

const CancelledBooking = () => {
    const canceledbookingData=[
        {
          UId:1,
          Id:1,
          Name:"Rahul",
          No_Of_Table:4,
        },
        {
          UId:2,
          Id:1,
          Name:"Pankaj",
          No_Of_Table:5,
        },
        {
          UId:3,
          Id:1,
          Name:"Roshan",
          No_Of_Table:2,
        },
        {
          UId:1,
          Id:2,
          Name:"Raj",
          No_Of_Table:4,
        },
      ]
    const createTable = () => {
        return (
            <table className='table table-bordered table-hover'>
                <thead><br />
                    <tr>
                        <th>UId</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>NO Of Table</th>
                       
                       
                    </tr>
                </thead>
                <tbody>
                    {canceledbookingData.map((data) => {
                        return (
                            <tr>
                                <td>{data.UId}</td>
                                <td>{data.Id}</td>
                                <td>{data.Name}</td>
                                <td>{data.No_Of_Table}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
  return (
    <div className='container'>
        <h3 align="center">Cancelled Booking</h3>
        {createTable()}
        <button type="button" class="btn btn-dark"><Link to="/BookList">Book List</Link></button>
    </div>
  )
}

export default CancelledBooking