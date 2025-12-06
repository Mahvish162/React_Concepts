import React, { useState } from 'react'

const UseState1 = () => {
    const [state, setState] = useState(0)

    const increment = () => {
        setState(state + 1)
    }
    const decrement = () => {
        setState(state - 1)
    }
    const reset = () => {
        setState(0)
    }

    return (
        <div>
            <div className='div'><h1>{state}</h1></div>
            <button onClick={increment} className='btn'>Increase</button>
            <button onClick={decrement} className='btn'>Decrease</button>
            <button onClick={reset} className='btn'>Reset</button>
        </div>
    )
}

export default UseState1
