import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {

    const [count,setCount]=useState(0)

    useEffect(function(){
        console.log("count updated to ",count)
    },[count])

    useEffect(()=>{
        document.title=`You clicked ${count} times`
    },[count])

  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>inc</button>
    </div>
  )
}

export default UseEffect2
