import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Contacts from '../components/Contact/contact'

const AppRoute

= () => {
  return (
    <Router>
        <NavbarComponent/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Services' element={<Ho/>} />
        <Route path='/contact' element={<Contacts/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        </Routes>
    </Router>
  )
}

export default AppRoute 


