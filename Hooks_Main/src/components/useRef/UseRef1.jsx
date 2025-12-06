import React, { useRef } from 'react'

const UseRef1 = () => {

  let heading=useRef(null)
  let heading2=useRef(null)

  let changeContent=()=>{
    heading.current.textContent="Welcome"
    heading.current.style.color="red"
    heading2.current.textContent="Mahvish fatima"
    heading2.current.style.color="blue"
  }

  return (
    <>
      <h1 ref={heading}>Hello</h1>
      <h2 ref={heading2}>Mahvish</h2>
      <button onClick={changeContent}>Change</button> 
    </>
  )
}

export default UseRef1
