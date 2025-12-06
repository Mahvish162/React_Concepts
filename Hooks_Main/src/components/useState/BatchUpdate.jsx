import React, { useState } from 'react'

const BatchUpdate = () => {

const [num,setNum]=useState(10)

let clicked=()=>{
    
    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1) these 3 lines will not increase the couint by 3 ,only they inc by 1 bcoz it is very quickly executing, therefore we have BtachUpdate here

    setNum(prev=>prev+1)
    setNum(prev=>prev+1)
    setNum(prev=>prev+1)
}
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={clicked}>click</button>
    </div>
  )
}

export default BatchUpdate
