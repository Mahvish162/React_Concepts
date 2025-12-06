import React from 'react'
import Nav from '../Nav'
import 'remixicon/fonts/remixicon.css'
import Page1Content from './Page1Content'


const Section1 = (props) => {
  console.log(props.user)
  return (
    <>
      <div className="h-screen w-full bg-white-900 ">
        <Nav />

       <Page1Content user={props.user}/>

      </div>
    </>

  )
}

export default Section1
