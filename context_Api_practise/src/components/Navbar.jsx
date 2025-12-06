import React, { useContext } from 'react'
import { ThemeData } from './Context/ThemeDataContext'

const Navbar = () => {

    const {theme}=useContext(ThemeData)
    
  return (
    <div>

     <nav>
         <div className="left">
            <h2>Sheriyans</h2>
      </div>
      <div className="right">
            <h3>About</h3>
            <h3>Profile</h3>
            <h3>Contacts</h3>
            <h3>{theme}</h3>
      </div>
     </nav>
     
    </div>
  )
}

export default Navbar
