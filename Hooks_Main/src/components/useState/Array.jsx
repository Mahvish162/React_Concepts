import React, { useState } from 'react'

const Array = () => {

    const [num, setNum] = useState([10  , 20  , 30  , 40])

    let btnClicked = () => {
        const arr = [...num]
        arr.push(88)
        arr.unshift(20)
        arr.splice(1,0,66)
        // arr.split(" ")
        setNum(arr)
    }


    return (
        <div>
            <h1>{num}</h1>
            <button onClick={btnClicked}>Click</button>
        </div>
    )
}

export default Array
