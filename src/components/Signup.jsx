import React from 'react'
import { Link } from "react-router-dom";
import './Main.css';
const Signup = () => {

  return (
    <div className="colorcode">
        <h2>Sigun page</h2>
        <label>Name:</label>
        <input type="text" /><br />
        <label >email</label>
        <input type="email" /><br />
        <label >password</label>
        <input type="password" />
        <br/>
       <Link to='/Login' style={{color:"green"}} ><button>Signup</button></Link> 
    </div>
  )
}

export default Signup