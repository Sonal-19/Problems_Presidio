import React, { useState } from 'react';
import './style.css';
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { 
            id: new Date().getTime().toString(),
            firstName: firstName,
            lastName: lastName,
            email: email, 
            phone: phone 
        };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        navigate("/");
    };

    return (
        <>
            <div className="container">
                <div className="box">
                    <h1 className='formL'>Login Form</h1>
                    <form action="" onSubmit={submitForm}>
                        <div className='boxs'>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='boxs'>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className='boxs'>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='boxs'>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className='formL'>
                        <button  className="login-button" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
          
        </>
    );
}

export default Login;
