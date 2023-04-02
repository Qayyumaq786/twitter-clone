import React from 'react'
import { Link } from 'react-router-dom'

export default function Logininput() {

  return (
    <div style={{ height: "100%", margin: "150px auto", color: " rgb(29, 161, 242)" }}>
      <div >
        <i class="fa-brands fa-twitter" style={{ fontSize: "80px" }}></i>
      </div>
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"><b>Email address</b></label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1"><b>Password</b></label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className='my-3 '>

          <Link to="/main" class="btn  btn-lg active " role="button" aria-pressed="true" style={{ backgroundColor: "rgb(29, 161, 242)", color: "white" }}>Log-In</Link>
          <Link to="/signUp" class="btn  btn-lg active ms-2" role="button" aria-pressed="true"  >Create an account</Link>
        </div>
      </form>
    </div>
  )
}
