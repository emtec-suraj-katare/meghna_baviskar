import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import HotelList from "./HotelList";
import { Link } from 'react-router-dom'
import './CSS/form.css'

function Login() {
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage
            .getItem("meghnaPassword")
            .replace(/"/g, "");
        let mail = localStorage.getItem("meghnaEmail").replace(/"/g, "");


        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if (passwordlog !== pass || emaillog !== mail) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }
    
    return (
        <div className="m-5 container">
            {home ? (
                <form onSubmit={handleLogin}>

                    <div className="m-3"><h3 align="center">Login Form</h3></div>
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={(event) => setEmaillog(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={(event) => setPasswordlog(event.target.value)}
                            /> <br />
                            <div className='button'>
                                <button className="btn btn-dark" ><Link to="/HotelList">Login</Link></button><br /></div>
                            

                        </div>
                    </div>

                    {flag && (
                        <Alert color="primary" variant="warning">
                            Fill correct Info else keep trying.
                        </Alert>
                    )}
                </form>
            ) : (
                <HotelList />
            )}
        </div>
    );
}

export default Login;



