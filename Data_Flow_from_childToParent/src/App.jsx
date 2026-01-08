import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <div>
      <div>
        <h1>Theme is {theme} </h1>

        <Navbar theme={theme} setTheme={setTheme} />
  
      </div>
    </div>
  )
}

export default App
