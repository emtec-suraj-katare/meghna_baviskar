import React from "react";
import { Link } from "react-router-dom";
import CancelledBooking from "./CancelledBooking";

const BookList=()=> {
    const bookingdata =[
      {
        Uid:1,
        Id:1,
        Name:"Megha",
        No_Of_Table:4,
      },
      {
        Uid:2,
        Id:1,
        Name:"anuja",
        No_Of_Table:5,
      },
      {
        Uid:3,
        Id:1,
        Name:"siddhi",
        No_Of_Table:2,
      },
      {
        Uid:1,
        Id:2,
        Name:"utkarsha",
        No_Of_Table:4,
      },
    ]
    const createTable = () => {
      return (
          <table className='table table-bordered table-hover'>
              <thead><br />
                  <tr>
                      <th>Uid</th>
                      <th>Id</th>
                      <th>Name</th>
                      <th>No Of Table</th>
                     
                     
                  </tr>
              </thead>
              <tbody>
                  {bookingdata.map((data) => {
                      return (
                          <tr>
                              <td>{data.Uid}</td>
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
    <h3 align="center">Booking List</h3>
      {createTable()}
      <button type="button" class="btn btn-dark"><Link to="/CancelledBooking">Canceeled Booking</Link></button>
  </div>
)
  }
    

export default BookList;
