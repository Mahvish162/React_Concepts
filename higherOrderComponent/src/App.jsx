import React from 'react'
import Message from './components/Message'
import Notification from './components/Notification'
import StyledComponent from './components/StyledComponent'

const App = () => {

  let ModifiedMessage=StyledComponent(Message)
  let ModifiedNotification=StyledComponent(Notification)

  return (
    <div>
      <ModifiedMessage/>
      <ModifiedNotification/>
    </div>
  )
}

export default App