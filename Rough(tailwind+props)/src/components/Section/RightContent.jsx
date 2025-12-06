import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full flex justify-between w-2/3 rounded-4xl overflow-hidden relative p-3'>

    {
      props.user.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })
    }
    
    </div>
  )
}

export default RightContent
