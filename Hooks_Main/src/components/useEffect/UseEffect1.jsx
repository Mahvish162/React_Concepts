import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {

    const [hover, setHover] = useState(10)
    const [hover2, setHover2] = useState(100)

    const mouseEnter = () => {
        setHover(hover + 1)
    }
    const mouseLeave = () => {
        setHover2(hover2 + 1)
    }

    useEffect(function(){
        console.log('use Effect is running....')
    },[hover2])


    return (
        <div>
            <h1>hover {hover}</h1>
            <h1>hover2 {hover2}</h1>
            <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>hover</button>
        </div>
    )
}

export default UseEffect1
