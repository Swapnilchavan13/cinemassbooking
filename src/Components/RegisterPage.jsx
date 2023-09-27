import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {

    const [useranme, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [againpassword, setAgainpassword] = useState('')

    const Signup = () => {
        alert("Your account has been created successfully")
    }

  return (
    <div>
        <h2>Register Page</h2>
        <label htmlFor="Username">Enter Username</label>
        <input type="text" value={useranme} onChange={(e) => setUsername(e.target.value)}  placeholder='Enter Username' name="username" required/>
        <label htmlFor="email">Enter Email Id</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Enter Email Id' name="email" required/>
        <label htmlFor="password">Enter Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' name="password" required />
        <label htmlFor="againpassword">Enter Again Password</label>
        <input type="password" value={againpassword} onChange={(e) => setAgainpassword(e.target.value)} placeholder='Enter Again Password' name="againpassword" required />
        <button onClick={Signup}>Signup</button>
        <Link to={"/login"}>
        <p>Already Have An Account</p>
        </Link>
    </div>
  )
}
