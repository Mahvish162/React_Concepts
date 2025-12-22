import React from 'react'

const MainText = () => {
    return (
        <div className='w-[40%]'>
            <h1 className='uppercase text-7xl font-extrabold '>Your feet deserve the best</h1>

            <h3 className='uppercase pt-8 pr-30 font-bold tracking-wider'>YOUR FEET DESERVES THE Best and we are here to help you with our shoes. your feet deserve the best and we are here to help you with our shoes </h3>

            <div className='pt-6 flex gap-10'>
                <button className='border-2 border-red-500 bg-red-500 text-white p-2'>Shop Now</button>
                <button className='border-2 p-2 '>Category</button>
            </div>

            <div>
                <h3 className='pt-4 pb-4'>Also available on </h3>
                <div className='h-[40px] w-[60px] flex gap-6'>
                    <img src="https://backend.insideiim.com/wp-content/uploads/2015/08/Flipkart-logo-insideiim.png" alt="" />
                    <img src="https://toppng.com/uploads/preview/amazon-logo-png-download-11658959210hpbxk4zjfn.png"  alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainText
