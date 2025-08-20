import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div style={colorcode}> 
        <h2>Login page</h2>
        <label htmlFor="">email</label>
        <input type="email" /><br />
        <label htmlFor="">password</label>
        <input type="password" /><br />
       <Link to='/' > <button>Login</button></Link>
</div>
  )
}

export default Login