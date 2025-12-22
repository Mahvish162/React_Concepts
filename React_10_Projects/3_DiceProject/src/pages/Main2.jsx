import React, { useState } from 'react'
import Main2Top from '../components/Main2Top'
import Main2Bottom from '../components/Main2Bottom'

const Main2 = () => {

  const [score, setScore] = useState(0)
  const [selectedNum, setSelectedNum] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [err, setError] = useState("")

  const generateRandom = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return (Math.floor(Math.random() * (max - min) + min));
  }

  const rollDice = () => {

    if (!selectedNum) {
      setError("You have not selected any number")
      return;
    }

    const randomNum = generateRandom(1, 7);
    setCurrentDice((prev) => randomNum)
    console.log("currentDice", currentDice)

    if (selectedNum === randomNum) {
      setScore((prev) => prev + randomNum);
    }
    else {
      setScore((prev) => prev - 2);
    }

    setSelectedNum(undefined)

  }

  return (
    <div className='min-h-screen w-screen'>
      <div className='flex flex-col gap-20' >
        <Main2Top selectedNum={selectedNum} setSelectedNum={setSelectedNum} score={score} err={err} setError={setError} />
        <Main2Bottom currentDice={currentDice} rollDice={rollDice} />
      </div>
    </div>
  )
}


export default Main2