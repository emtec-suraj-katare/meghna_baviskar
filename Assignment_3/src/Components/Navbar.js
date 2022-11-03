import React from 'react'
import './CSS/navbar.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Loginn'
import HotelList from './HotelList'
import Register from './Register'
import BookTable from './BookTable'
import BookingHistory from './BookingHistory'
import UcancelledBookings from './UcancelledBookings'
import AdminRegister from './AdminRegister'
import AdminLogin from './AdminLogin'
// import AdminHome from './AdminHome'
import RestuarantList from './RestaurantList'
import UserList from './UserList'
import BookList from './BookList'
import CancelledBooking from './CancelledBooking'


const Navbar = () => {
    return (
        
        <div>
            <Router>
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link" to="/AdminRegister">Admin Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/AdminLogin">Admin Login</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/Register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Loginn">Login</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/BookingHistory">Booking History</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/UcancelledBookings">Cancelled Booking</Link>
                            </li> */}
                        </ul>
                    </div>
                </nav>

                <Routes>
                    <Route path="/Loginn" element={<Login />} />


                    <Route path="/Register" element={<Register/>} />

                    <Route path="/AdminRegister" element={<AdminRegister/>} />

                    <Route path="/AdminLogin" element={<AdminLogin/>} />


                    <Route path="/HotelList" element={<HotelList />} />

                    <Route path="/BookTable" element={<BookTable />} />


                    <Route path="/BookingHistory" element={<BookingHistory />} />
                    
                    <Route path="/UcancelledBookings" element={<UcancelledBookings />} />


                    <Route path="/RestaurantList" element={<RestuarantList />} />
                    <Route path="/UserList" element={<UserList />} />
                    <Route path="/BookList" element={<BookList />} />
                    <Route path="/CancelledBooking" element={<CancelledBooking />} />




                </Routes>

            </Router>
        </div>
        // </div>

    )
}

export default Navbar