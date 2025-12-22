import React from 'react'
import image from '../assets/image.png';


const BottomRight = () => {
  return (
    <div className='w-[70%] bg-amber-200 mr-30'>
      <image />
      <img src={image} alt="" className='h-full w-full bg-cover'/>
    </div>
  )
}

export default BottomRight
