import React, { useState } from 'react'

const TwoWayBinding = () => {

    const [title,setTitle]=useState('')

    const submitHandler=(e)=>{
            e.preventDefault()
            console.log('form submitted by ',title);
            setTitle('')
    }

    return (
        <div>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>

                {/* <input type="text" placeholder='Enter your name' onChange={(e) => { console.log(e.target.value)
                 }} />

                <button >Submit</button> */}
                {/* // The problem in this code is here we r interacting with the dom directly, which we cant able to do in react, we have to invlove react in everything, therefore for achieving that, Two Way Binding comes into the picture */}

                
                 <input type="text" placeholder='Enter your name' value={title} onChange={(e) => { setTitle(e.target.value)
                 }} />

                <button >Submit</button>

            </form>
        </div>
    )
}

export default TwoWayBinding

// Two-way binding means:

// UI updates the state

// State updates the UI

// Both happen together.

// In React, this usually refers to form inputs (input, textarea, select) where:

// ✔ the value comes from state
// ✔ and the onChange updates the same state

// So data flows in both directions.

// 🌟 What’s happening?

// 1️⃣ value={name} → The input box shows whatever is in state.
// 2️⃣ onChange → setName updates the state whenever you type.
// 3️⃣ State updates → React re-renders → input box updates.

// UI ↔ State = two-way binding

// One-way binding (React default):

// Data flows from state → UI