import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav2 = (props) => {


 const data=useContext(ThemeDataContext)

  return (
    <div>
      <div className="nav2">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>{data}</h3>
            <h3>{props.theme}</h3>
      </div>
    </div>
  )
}

export default Nav2
