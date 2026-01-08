import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav = () => {
    
    const data=useContext(ThemeDataContext)
    console.log(data)

  return (
    <div>
      <h2>{data}</h2>
    <h2>hiii</h2>
    </div>
  )
}

export default Nav
