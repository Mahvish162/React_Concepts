import React from 'react'

const Card = (props) => {
  return (

    <>
      <h1>Name : {props.name}</h1>
      <h1>Age : {props.age}</h1>
      <h1>Address : {props.address.city},{props.address.state}</h1>
      <h1>Skills : {props.skills}</h1>
      <h1>Greet : {props.greet()}</h1>
    </>





    // <div className='parent'>
    //   <div className="child">
    //     <h1>{props.name}</h1>
    //     <p> {props.para} </p>
    //     <button>view Profile</button>
    //   </div>
    // </div>
  )
} 

export default Card
