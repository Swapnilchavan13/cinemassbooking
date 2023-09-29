import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './login.css'; 

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        alert("Login Successful");
        navigate("/homepage");
    };

    return (
        <div className="container">
            <h2>Login Page</h2>
            <div className="form-group">
                <label>Email Id</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email Id' name="email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' name="password" />
            </div>
            <button onClick={submit}>Login</button>
            <Link to={"/"} className="link">
                Create A New Account
            </Link>
        </div>
    );
};
