import React from 'react'
import LeftTopContent from './LeftTopContent'
import LeftBottomContent from './LeftBottomContent'

const LeftContent = () => {
  return (
   <div className=' h-full flex flex-col justify-between w-1/3'>

               <LeftTopContent/>

              <LeftBottomContent/>

            </div>
  )
}

export default LeftContent
