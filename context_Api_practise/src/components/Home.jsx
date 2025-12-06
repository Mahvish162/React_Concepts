import React, { useContext } from 'react'
import Navbar from './Navbar'
import { ThemeData } from './Context/ThemeDataContext'
import DivBody from './DivBody'

const Home = () => {

  const [theme] = useContext(ThemeData)

  return (
    <div>
      <Navbar/>
      <div className='divBody'>
          {theme} mode enabled
      </div>

      <DivBody/>
    </div>
  )
}

export default Home
