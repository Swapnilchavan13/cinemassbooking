import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const submit = () =>{
        alert("Login Successful")
        navigate("/homepage")
    }
    console.log(email)
  return (
    <div>
        <h2>Login Page</h2>
        <div>
        <label>Email Id</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Enter Email Id' name="email" />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' name="password"  />
        <button onClick={submit}>Login</button>
        <Link to={"/"}>
            <p>Create A New Account</p>
        </Link>
        </div>
    </div>
  )
}
