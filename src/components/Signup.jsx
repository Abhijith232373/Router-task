import React from 'react'
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
        <h2>Sigun page</h2>
        <label htmlFor="">Name:</label>
        <input type="text" /><br />
        <label htmlFor="">email</label>
        <input type="email" /><br />
        <label htmlFor="">password</label>
        <input type="password" />
        <br />
       <Link to='/Login' style={{color:"green"}} ><button>Signup</button></Link> 
    </div>
  )
}

export default Signup