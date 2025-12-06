import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav>
                <Link to="/" > <h2>Home</h2></Link>
                <Link to="/profile" ><h2>Profile</h2></Link>
                <Link to="/contact"><h2>Contacts</h2></Link>
                <Link to="/about">  <h2>About</h2></Link>
            </nav>
        </>
    )
}

export default Nav
