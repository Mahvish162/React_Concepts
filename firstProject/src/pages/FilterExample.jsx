import React from 'react'

const filterExample = () => {
    let numbers=[1,2,3,4,5,6,7,8]
    let filterData=numbers.filter((x)=>{
        return x>4
    })
  return (
    <>
       <h1>Filter example</h1> 
       {filterData.map((x)=>{
        return <li>{x}</li>
       })}
    </>
  )
}

export default filterExample
