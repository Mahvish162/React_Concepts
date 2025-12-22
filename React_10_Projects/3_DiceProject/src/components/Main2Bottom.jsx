
import { useState } from "react"
import Rules from "./Rules"

const Main2Bottom = ({ currentDice, rollDice }) => {

    const [showRules,setShowRules]=useState(false)

    const toggle=function(){
        setShowRules(!showRules);
    }

    return (
        <>
            <div className="flex justify-center text-center">

                <div className='h-[449px] w-[250px] flex justify-center text-center flex-col gap-6 p-2'>

                    <img src={`/images/Dice/D${currentDice}.png`} alt="image" className='cursor-pointer' onClick={rollDice} />

                    <h2 className='font-bold text-2xl'>Click on Dice to roll</h2>

                    <button className='font-semibold border-2 border-black p-2 rounded-xl'>Reset score</button>

                    <button className='font-semibold border-2 border-black p-2 rounded-xl bg-black text-white' onClick={toggle}>Show Rules</button>

                </div>
            </div>

            {showRules && <Rules />}
        </>
    )
}

export default Main2Bottom