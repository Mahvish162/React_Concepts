import React from 'react'
import image from '../assets/img.png'

const Main1 = ({toggle}) => {
  return (
    <>
    <div className='w-[50%]'>
      <img src={image} alt="" className='bg-cover' />
    </div>
    <div className="w-[50%] flex flex-col justify-center text-center">
      <span className='text-8xl font-bold'>Dice Game</span>
      <button className='bg-black h-11 ml-80 mt-10 w-[220px] text-white' onClick={toggle}>Play Now</button>
    </div>
    </>
  )
}

export default Main1
