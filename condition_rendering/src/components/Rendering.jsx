import { React, useState } from 'react'

const Rendering = () => {

    const [state, setState] = useState(false)

    function toggle() {
        setState(!state)
        console.log(state)
    }

    return (
        <>
            <img style={{height:"200px",width:"200px"}} src={state?"https://i.pinimg.com/1200x/c6/b5/5d/c6b55d3e8b47e3860712282fbadaf904.jpg":"https://i.pinimg.com/1200x/55/e0/34/55e034ef1f9662079179120e19067938.jpg"} alt="" />
            <button onClick={toggle}>{state ? "OFFFF" : "ONNNN"}</button>
            <h2>{state?"Bulb is off ":"Bulb gets Onnn"}</h2>
        </>
    )
}

export default Rendering
