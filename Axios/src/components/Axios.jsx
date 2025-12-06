import axios from 'axios'
import React, { useState } from 'react'

const Axios = () => {

    const [data,setData]=useState([])

    const getData=async ()=>{
        const response=await axios.get('https://picsum.photos/v2/list')

        setData(response.data)
    }

  return (
    <div>
        <button onClick={getData}>click</button>
      {data.map((elem,idx)=>{
            return <h1>Hello, {elem.author} , {idx}</h1>
      })}
    </div>
  )
}

export default Axios
