import React from 'react'
import Cards from './Cards'

const BottomSection = ({data}) => {
  return (
    <div className='bg-[url(/bg.png)] bg-cover h-full px-4 sm:px-10 lg:px-30'>
        <Cards data={data}/>
    </div>
  )
}

export default BottomSection