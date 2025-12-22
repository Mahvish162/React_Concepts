import React from 'react'
import shoeimg from '../assets/shoeimg.png' 

const MainImg = () => {
  return (
    <div className='w-[60%]'>
      <img src={shoeimg} alt="shoe" className='bg-cover'/>
    </div>
  )
}

export default MainImg