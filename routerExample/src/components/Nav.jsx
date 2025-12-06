import React from 'react'
import "../Styles/global.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div id="nav">

        <div id="left">
          <h2>logo</h2>
        </div>

        <div id="right">
          <Link to={'/signup'}><h2>SignUp</h2></Link>
          <Link to={"/login"}><h2>Login</h2></Link>         
        </div>

      </div>
    </>
  )
}

export default Nav
