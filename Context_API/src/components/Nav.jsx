import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'


const Nav = (props) => {

    const data=useContext(ThemeDataContext)
    console.log(data)

    return (
    <div className='navbar'>
 
      <div className="nav">
       <h2>Sheriyans</h2> 
        <h2>{data}</h2>
        {/* {props.children[0]} */}
        {/* {props.children[1]} */}

        <Nav2 theme={props.theme}/>
      </div>



    </div>
  )
}

export default Nav
