import React from 'react'
import Nav from './pages/Nav'
import Footer from './pages/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Mens from './pages/Mens'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import NavigationButtons from './components/NavigationButtons'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return (

    <div>

      <Nav />
      <NavigationButtons />
        
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} />

        <Route path='/courses' element={<Courses />} />
        
        <Route path='/courses/:id' element={<CourseDetails />} />

        <Route path='/product' element={<Product />}>
          <Route path='mens' element={<Mens />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  )
}

export default App
