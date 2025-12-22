import React from 'react'
import ReactDOM from "react-dom"


const PopUp = (props) => {
  return ReactDOM.createPortal(<div style={{backgroundColor:"black",color:"white",border:"2px",display:"flex"}}>
    <h2>{props.message}</h2>
  </div>,document.getElementById("portal"));
}

export default PopUp
