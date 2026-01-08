import React from 'react'
import Message from './components/Message'
import Notification from './components/Notification'
import StyledComponent from './components/StyledComponent'

const App = () => {

  let ModifiedMsg = StyledComponent(Message)
  let ModifiedNtf = StyledComponent(Notification)

  return (
    <div>
      <ModifiedMsg />
      <ModifiedNtf />
      <Message />
    </div>
  )
}

export default App