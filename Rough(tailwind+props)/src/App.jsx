import React from 'react'
import Section1 from './components/Section/Section1'

const App = () => {
  const user=[
    {
      img:'https://i.pinimg.com/736x/85/96/36/859636e572827f8e4857f0fc896d8eed.jpg',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://i.pinimg.com/1200x/fc/e8/43/fce843b9441db1fd5aadb07a7346917e.jpg',
      intro:'',
      tag:'underServed'
    },
    {
      img:'https://i.pinimg.com/1200x/b6/2d/83/b62d8395181d55ce3dd228ac8c724328.jpg',
      intro:'',
      tag:'UnBanked'
    },
    {
      img:'https://i.pinimg.com/1200x/b6/2d/83/b62d8395181d55ce3dd228ac8c724328.jpg',
      intro:'',
      tag:'UnBanked'
    },
    {
      img:'https://i.pinimg.com/1200x/b6/2d/83/b62d8395181d55ce3dd228ac8c724328.jpg',
      intro:'',
      tag:'UnBanked'
    }
  ];
  return (
    <>
    
      <Section1 user={user}/>
    </>
  )
}

export default App
