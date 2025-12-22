import React, { useState } from 'react'

const RollDice = ({randomNum,randomNumGen}) => {

  return (

    <div className='h-[449px] w-[250px] flex flex-col justify-center gap-4 items-center mt-15'>

      <img src={`/Dice/D${randomNum}.png`} alt="" className='h-[250px] w-full' onClick={()=>randomNumGen(1,6)} />

      <h2 className='text-2xl font-bold'>Click on Dice to roll</h2>

      <button className='border-2 border-black w-[200px]'>Reset score</button>

      <button className='border-2 w-[200px] bg-black text-white border-black'>Show Rules</button>

    </div>

  )
}

export default RollDice