import React, { useState } from 'react'
import Nav from './components/Nav'

const App = () => {

  const [theme, setTheme] = useState('Light')

  return (
    <div>

      <Nav theme={theme} setTheme={setTheme}>

        {/* <h1>this is me</h1>  0th children 
        <h1>this is me</h1>  1st children  */}
        
      </Nav>
      
    </div>
  )
}

export default App
