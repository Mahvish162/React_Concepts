import React from 'react'
import { MessageSquareText } from 'lucide-react';
import { Phone } from 'lucide-react';
import ContactForm from './ContactForm';

const BottomLeft = () => {
  return (
    <div className='W-[50%] p-3 pt-8 font-bold'>

      <div className=''>

        <button className='border-2 bg-black text-white h-[44px] w-[220px] text-center mr-4 rounded-[8px]'>
          <div className='flex gap-3 justify-center'>
            <MessageSquareText size={24} className='' />
            <span>VIA SUPPORT CHAT</span>
          </div>
        </button>

        <button className='border-2 bg-black text-white h-[44px] w-[220px] text-center rounded-[8px]'>
          <div className='flex gap-3 justify-center'>
            <Phone size={24} className='' />
            <span>VIA CALL</span>
          </div>
        </button>

        <button className="h-[44px] w-[472px] border-1 mt-7 border-black  rounded-[8px]">
          <div className='flex gap-3 justify-center'>
            <MessageSquareText size={24} className='' />
            <span>VIA EMAIL FORM</span>
          </div>
        </button>

      </div>

      <ContactForm/>

    </div>
  )
}

export default BottomLeft