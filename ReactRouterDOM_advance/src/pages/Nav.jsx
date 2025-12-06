import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-blue-950 text-white p-6 flex justify-between'>
      
      <h2 className='text-2xl text-bold'>Fatima's</h2>

      <div className="flex gap-6">
       
       <Link to='/'>Home</Link>
       <Link to='/about'><h3>About</h3></Link>
       <Link to='/courses'>Courses</Link>
       <Link to='/product'>Products</Link>
       
      </div>

    </div>
  )
}

export default Nav