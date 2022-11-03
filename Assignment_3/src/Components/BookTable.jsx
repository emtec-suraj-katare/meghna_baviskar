import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/heading.css'

const BookTable = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [members, setMembers] = useState('')
    const [contact, setContact] = useState('')
    const validateUser = () => {
        console.log(`Name=${name}`)
        console.log(`Date=${date}`)
        console.log(`Time=${time}`)
        console.log(`Members=${members}`)
        console.log(`Contact=${contact}`)
    }
    const readName = (e) => {
        setName(e.target.value)
    }
    const readDate = (e) => {
        setDate(e.target.value)
    }
    const readTime = (e) => {
        setTime(e.target.value)
    }
    const readMembers = (e) => {
        setMembers(e.target.value)
    }
    const readContact = (e) => {
        setContact(e.target.value)
    }
    const shoot = () => {
        alert("Table Booked Successfully !");
    }
    return (
        // <div className="back" style={{
        //     background: `url(${"./images/main.webp"})`
        // }}>


        <div className="m-3"><br />
            <div className="m-3"><h3 align="center">Reserve Your Table Here </h3></div>
            <br />
            <div className="form">
                <div className="input-group mb-3">
                    <span className="input-group-text">Name</span>
                    <input
                        onChange={readName}
                        type="text"
                        aria-label="Name"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleDate" className="form-label">
                        Date
                    </label>
                    <input
                        onChange={readDate}
                        type="date"
                        className="form-control"
                        id="exampleDate"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleTime" className="form-label">
                        Time
                    </label>
                    <input
                        onChange={readTime}
                        type="time"
                        className="form-control"
                        id="exampleInputPassword"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleNumber" className="form-label">
                        Members
                    </label>
                    <input
                        onChange={readMembers}
                        type="number"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleContacat" className="form-label">
                        Contact
                    </label>
                    <input
                        onChange={readContact}
                        type="text"
                        className="form-control"
                        id="exampleContact"
                    />
                </div>
                <div className=''>
                    <button className="btn btn-dark" onClick={event => { validateUser(); shoot() }} >
                        <Link to="/BookTable">BOOK TABLE</Link></button><br /><br />
                    <button type="button" class="btn btn-dark"><Link to="/BookingHistory">My Bookings</Link></button> 

                    <button type="button" class="btn btn-dark"><Link to="/UcancelledBookings">Cancelled Bookings</Link></button>
                </div>
            </div>
        </div>

        // </div>
    )
}

export default BookTable