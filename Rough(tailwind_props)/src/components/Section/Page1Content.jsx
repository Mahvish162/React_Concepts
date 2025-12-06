import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
    return (
        <div className='flex justify-between h-[90vh] w-full px-16 py-5'>
            <LeftContent/>
            <RightContent user={props.user}/>

        </div>
    )
}

export default Page1Content
