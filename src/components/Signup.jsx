import React from 'react'

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
        <button>Signup</button>
    </div>
  )
}

export default Signup