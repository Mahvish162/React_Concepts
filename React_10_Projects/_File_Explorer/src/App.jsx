import React, { useState } from 'react'
import explorer from './Data/FolderData';
import Folder from './components/Folder';
const App = () => {
  
  const [explorerData,setExplorerData]=useState(explorer);

  console.log(explorerData)

  return (
    <div className='App'>
        <Folder explorer={explorerData}/>
    </div>
  )
}

export default App

