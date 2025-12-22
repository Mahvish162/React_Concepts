import React, { useState } from 'react'
import Main1 from './pages/main1'
import Main2 from './pages/Main2'

const App = () => {

  const [isGameStarted,setIsGameStarted]=useState(false);

  const toggleGamePlay=()=>{
    setIsGameStarted(!isGameStarted);
  }

  return (
    <div className='h-screen w-screen flex p-10'>
   
      {isGameStarted ? <Main2/> : <Main1 toggle={toggleGamePlay}/>}

    </div>
  )
}

export default App
