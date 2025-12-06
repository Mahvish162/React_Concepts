import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (

        <div className="right h-full relative flex flex-nowrap shrink-0 overflow-hidden w-80 bg-red-500 rounded-4xl mr-5.5">
            
            <img src={props.img} className='object-cover h-full w-full' alt="" />
            <RightCardContent tag={props.tag} id={props.id} />

        </div>

    )
}

export default RightCard
