import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavigationButtons = () => {

    const Navigate=useNavigate()



  return (
    <div className='bg-blue-800 w-full flex gap-5 p-5'>

        <button className="bg-amber-600 p-3 rounded-2xl active:scale-95 active:bg-amber-800" onClick={()=>{
            Navigate('/')
        }}>Back to Home Page</button>
        <button className="bg-amber-600 p-3 rounded-2xl active:scale-95 active:bg-amber-800" onClick={()=>{
            Navigate(-1)
        }}>Back</button>
        <button className="bg-amber-600 p-3 rounded-2xl active:scale-95 active:bg-amber-800" onClick={()=>{
            Navigate(+1)
        }}>Next</button>
      
    </div>
  )
}

export default NavigationButtons
