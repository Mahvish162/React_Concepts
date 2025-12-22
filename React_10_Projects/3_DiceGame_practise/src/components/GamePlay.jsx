import TotalScore from './TotalScore'
import NumberSelected from './NumberSelected'
import RollDice from './RollDice'
import { useState } from 'react'


const GamePlay = () => {

  const [randomNum, setRandomNum] = useState(1)
  const [numSelected, setNumSelected] = useState(1)

  const randomNumGen = (min, max) => {

    console.log(Math.floor(Math.random() * (max - min + 1)) + min)
    setRandomNum(Math.floor(Math.random() * (max - min + 1)) + min)
    return Math.floor(Math.random()
      * (max - min + 1)) + min;

  };

  const NumHandler = (elem, isSelected) => {
    setNumSelected((prev) => elem)
    console.log(numSelected)
  }

  return (
    <div className='h-full w-full '>
      <div className="h-[30px] flex justify-between text-center">
        <TotalScore />
        <NumberSelected numSelected={numSelected} setNumSelected={setNumSelected} NumHandler={NumHandler} />
      </div>

      <div className="flex mt-10 justify-center items-center">
        <RollDice randomNum={randomNum} randomNumGen={randomNumGen} />
      </div>
    </div>
  )
}

export default GamePlay
