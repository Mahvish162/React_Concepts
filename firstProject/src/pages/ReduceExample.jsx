import React from 'react'

const ReduceExample = () => {
    let num=[1,3,4,77,98,3,0,9]
    let sum=num.reduce((acc,value)=>{
        return acc+value
    },0)
  return (
   <>
    <h1>Reduce example</h1>
    { sum }
   </>
  )
}

export default ReduceExample
