import React from 'react'

const Cards = (props) => {
  return (
    <>
       <div id="card">
        <div id="left">
            <h2>{props.name}</h2>
            <h3>{props.rank}</h3>
            <p>{props.description}</p>
            <h3>{props.location}</h3>
        </div>
        <div id="right">
            <img src="https://as1.ftcdn.net/v2/jpg/05/04/94/96/1000_F_504949617_z8ZrHLYID3IwFpDOaqWyDWVH1R22Xml7.jpg" alt="" />
        </div>
       </div>
    </>
  )
}

export default Cards
