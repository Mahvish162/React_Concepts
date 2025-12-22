import React from 'react'
import TopText from './components/TopText'
import BottomText from './components/BottomText'

const App = () => {
  return (
    <div className='p-15 w-screen h-screen flex flex-col'>
      <TopText/>
      <BottomText/>
    </div>
  )
}

export default App