import React from 'react'
import LocalStorage from './LocalStorage1';

const LocalStorage1 = () => {

  const user = {
    name: 'mahvish',
    age: 22,
    city: 'kanpur'
  }

  localStorage.setItem('user', JSON.stringify(user))    // object to string

  const userDisplay=localStorage.getItem('user')

  console.log(JSON.parse(userDisplay))    //string to object

  return (
    <div>

    </div>
  )
}

export default LocalStorage1
