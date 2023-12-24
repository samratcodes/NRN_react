import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='loginsection'>
    <div className='login'>
      <form className='loginform'>
        <h1 className='ltitle'>Login</h1>
        <input className='inputbox' type="text" placeholder="Enter Username" name="username" required></input>
        <input  type="password" placeholder="Enter Password" name="password" required></input>
        <div><button  className='btnlogin' type="submit">Login</button>
        <button  type="button" className="cancelbtn"><a href="/">Cancle</a></button></div>
        <span className="psw"> <a href="/">Forgot password?</a></span>
      </form>
    </div></div>
  )
}

export default Login
