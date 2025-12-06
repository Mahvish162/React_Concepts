import React from 'react'

const MapExample = () => {

    let names=["a","b","c","d","e"]

  return (
   <>
   <h1>Map example</h1>
      {names.map((x)=>{  
        return <li>{x}</li>
      })}
   </>
  )
}

export default MapExample
