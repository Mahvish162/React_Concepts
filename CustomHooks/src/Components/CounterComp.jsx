import React from 'react'
import useCounter from '../custom-hooks/useCounter'

const CounterComp = () => {

    const {count,increment,decrement,reset}=useCounter(0);


  return (
    <div>
        <h2>count : {count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterComp
