import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Error from './Pages/Error'


const App = () => {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}  />
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
