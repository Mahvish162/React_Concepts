import React from 'react'

const Nav = () => {
  return (
    <div className='w-full flex justify-between p-4'>
        
        <img src="https://worksdesigngroup.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-06-at-1.14.40-PM.png" alt="" className='h-[60px] w-[350px]'/>

        <div className='flex gap-6 font-black font-light font-semibold'>
            <h5>Menu</h5>
            <h5>Location</h5>
            <h5>About</h5>
            <h5>Contact</h5>
        </div>

        <button className='bg-red-600 text-white font-bold h-[40px] p-2'>
            Login
        </button>

    </div>
  )
}

export default Nav
