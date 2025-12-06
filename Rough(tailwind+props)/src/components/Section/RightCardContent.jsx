import React from 'react'

const RightCardContent = (props) => {
    return (
        <>
            <div className='absolute top-0 bottom-0 h-full w-full flex justify-between flex-col p-10 '>

                <div className="bg-white w-12 h-12 px-3 flex items-center justify-center rounded-full">{props.id+1}</div>


                <div className="">
                    <p className='mb-3 font-medium text-gray-200 leading-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum velit ullam saepe cupiditate ab voluptas soluta perferendis dolore illo at.</p>


                    <div className="flex justify-between m-1">
                        <button className="rounded-full px-3 py-2 text-white text-xl bg-blue-600 ">{props.tag}</button>

                        <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full '> <i className='ri-arrow-right-line'></i> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightCardContent
