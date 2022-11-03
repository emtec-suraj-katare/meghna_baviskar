import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from "./Loginn";
import AdminRegister from './AdminRegister'

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setAddress] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);



    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("meghnaEmail", JSON.stringify(email));
            localStorage.setItem(
                "meghnaPassword",
                JSON.stringify(password)
            );
            console.log("Saved in Local Storage");

            setLogin(!login);
        }
    }
    const shoot = () => {
        alert("Successfully Registered !");
    }

    function handleClick() {
        setLogin(!login);
    }

    




    return (

        <div>
            {" "}
            {login ? (
                <form onSubmit={handleFormSubmit}>


                    <div className="m-3"><h3 align="center">Registration Form</h3></div><br />
                    <div className="form">

                        <div className="input-group mb-3">
                            <span className="input-group-text">Name</span>
                            <input
                                onChange={(event) => setName(event.target.value)}
                                type="text"
                                aria-label="Name"
                                className="form-control"
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="form">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                onChange={(event) => setEmail(event.target.value)}
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="form">
                            <label htmlFor="exampleInputPassword" className="form-label">
                                Password
                            </label>
                            <input
                                onChange={(event) => setPassword(event.target.value)}
                                type="password"
                                className="form-control"
                                id="exampleInputPassword"
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="form">
                            <label htmlFor="exampleAddress" className="form-label">
                                Addess
                            </label>
                            <input
                                onChange={(event) => setAddress(event.target.value)}
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                            <br />


                            <div className='alogin'>
                            <button className="btn btn-dark" onClick={event => { shoot() }} >
                        <Link to="/Loginn">Register</Link></button><br /><br />
                        <p onClick={handleClick} className="forgot-password text-right">
                        Already registered{" "}log in?

                    </p>
                                {/* <button className="btn btn-dark" ><Link to="/Loginn">Register</Link></button><br /> */}
                                {/* <button type="button" class="btn btn-dark" style={{
                            margin: '10px'
                        }}><Link to="/AdminRegister">Register As Administrator</Link></button> */}
                    </div>
                        </div>
                    </div>


                    {/* <button type="submit" className="btn btn-dark btn-lg btn-block">
                        Register
                    </button> */}
                    {/* <p onClick={handleClick} className="forgot-password text-right">
                        Already registered{" "}log in?

                    </p> */}
                    {flag && (
                        <Alert color="primary" variant="danger">
                            I got it you are in hurry! But every Field is important!
                        </Alert>
                    )}
                </form>
            ) : (
                <Login />
            )}
        </div>


    );
}

export default Registration;



