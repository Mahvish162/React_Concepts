import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const NavBar = ({search,setSearch}) => {
  return (
    <div className='bg-black w-full text-white flex justify-between p-3 px-6'>
      
      <h1 className="text-3xl font-extrabold italic text-green-600">Mahvish</h1>

      <div className="flex gap-2 justify-center items-center border-1 rounded-3xl p-1.5 border-gray-600">
        <IoSearchSharp />
        <input type="text" placeholder='style, models, fashion.....' value={search} onChange={(e)=>setSearch(e.target.value)} className='tracking-widest'/>
      </div>
      
      <div className="flex gap-8 text-2xl justify-center items-center">
        <IoMdSettings />
        <IoIosNotifications />
        <FaRegUserCircle />
      </div>

    </div>
  )
}

export default NavBar