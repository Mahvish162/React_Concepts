import React, { useState } from 'react'
import PopUp from './pages/PopUp';

const App = () => {

  const [toast,setToast]=useState("");

  function display(){
    setToast("Item added to cart!!!!");

    setTimeout(()=>{
      setToast("");
    },3000)
  }
  
  return (
    <div>
       <button onClick={display}>Add Item</button>
       {toast && <PopUp message={toast}/>}
    </div>
  )
}

export default App
