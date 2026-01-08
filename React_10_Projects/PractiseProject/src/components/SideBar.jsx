import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaSearchengin } from "react-icons/fa6";
import { FaArrowsToDot } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { LuClub } from "react-icons/lu";


const SideBar = () => {
  return (
    <div className='w-[15%] pt-8 h-full p-3 bg-black text-white flex flex-col gap-4'>

      <div className="flex flex-col gap-2">
        <h3 className='text-green-600 flex items-center gap-2'><IoMdHome />Home</h3>
        <h3 className='flex items-center gap-2'><FaSearchengin />Searches</h3>
        <h3 className='flex items-center gap-2'><FaArrowsToDot />ToDo</h3>
      </div>

      <div className="text-red-600">History</div>
      <div className="flex flex-col gap-2">
        <h3 className='flex items-center gap-2'><FaGooglePlay />Recently Played</h3>
         <h3 className='flex items-center gap-2' ><FaSearchengin />Searches</h3>
        <h3 className='flex items-center gap-2'> <FaArrowsToDot />ToDo</h3>
      </div>

      <div className="text-red-600">Reccomdations</div>
      <div className="flex flex-col gap-2">
        <h3 className='flex items-center gap-2'><LuClub />Youth club</h3>
         <h3 className='flex items-center gap-2'><FaSearchengin />Searches</h3>
        <h3 className='flex items-center gap-2'><FaArrowsToDot />ToDo</h3>
      </div>

      <div className="mt-6 p-1 text-green-600 border-2 border-green-600 flex justify-center font-semibold">
        Tap To Play
      </div>
    </div>

  )
}

export default SideBar
