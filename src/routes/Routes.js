import React from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Navbars from '../component/Navbar'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

function Routing() {
  return (
    <BrowserRouter>
    <Navbars/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing