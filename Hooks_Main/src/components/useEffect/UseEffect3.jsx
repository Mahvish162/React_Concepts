import React, { useEffect, useState } from 'react'

const UseEffect3 = () => {

    const [A,setA]=useState(0)
    const [B,setB]=useState(0)

    function aChanging(){
        console.log("A clicked")
    }
    function bChanging(){
        console.log("B clicked")
    }
    //we want that while changing the values of a and b the respective changing functions work, but we cant write it on the main track ,means ,attached with the button itself, so we have to use "useEffect hook" to make it run on side track

    useEffect(()=>{
      aChanging()
    },[A])
    
    useEffect(()=>{
      bChanging()
    },[B])

  return (
    <div>
      <h1>{A}</h1>
      <h1>{B}</h1>

      <button onClick={()=>{setA(A+1)}}>Click A</button>
      <button onClick={()=>{setB(B+1)}}>Click b</button>
    </div>
  )
}

export default UseEffect3
