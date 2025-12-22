import React from 'react'

const TotalScore = ({score}) => {
    return (
        <div className='flex flex-col justify-center text-center'>
            <div className="text-6xl font-bold">
                {score}
            </div>
            <h2 className='font-semibold'>Total Score</h2>
        </div>
    )
}

export default TotalScore
