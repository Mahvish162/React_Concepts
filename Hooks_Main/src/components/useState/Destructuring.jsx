import React, { useState } from 'react'

const Destructuring = () => {

    const [num,setNum]=useState({user:'mahvish',age:22})

    
    // updating the data way 1
    // const btnClicked=()=>{
    //     const newNum={...num};
    //     newNum.user='fatima'
    //     newNum.age='18'
    //     setNum(newNum)
    // }

     //updating the data way2
    let btnClicked=()=>{
        setNum(prev=>({...prev,user:"fatima",age:20}))
    }

    return (
    <div>
        <h1>{num.user},{num.age}</h1>
        <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default Destructuring
