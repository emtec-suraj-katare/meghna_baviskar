import React from 'react'
import { Link } from 'react-router-dom'

const UcancelledBookings = () => {
    const data = [
        {
            "Id": 1,
            "Date": "20-10-22",
            "Email": "John@gmail.com",
            "Address": "Pune",
            "Time": "8.00 PM ",
            "Hotel": "MDF"
        },
        {
            "Id": 5,
            "Date": "20-10-2",
            "Email": "John@gmail.com",
            "Address": "Pune",
            "Time": "8.00 PM ",
            "Hotel": "AS"
        },
        {
            "Id": 7,
            "Date": "21-10-21",
            "Email": "Virat@gmail.com",
            "Address": "Mumbai",
            "Time": "10.00 PM",
            "Hotel": "Azzuro"
        } 
    ]
    const createTable = () => {
        return (
            <table className='table table-bordered table-hover'>
                <thead><br />
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Time</th>
                        <th>Hotel</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) => {
                        return (
                            <tr>
                                <td>{data.Id}</td>
                                <td>{data.Date}</td>
                                <td>{data.Email}</td>
                                <td>{data.Address}</td>
                                <td>{data.Time}</td>
                                <td>{data.Hotel}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
  return (
    <div className='container'>
        {createTable()}
        <button type="button" class="btn btn-dark"><Link to="/BookTable">Back</Link></button>
    </div>
  )
}

export default UcancelledBookings