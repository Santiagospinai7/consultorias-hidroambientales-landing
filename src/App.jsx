import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <Navbar navClass="nav-light" />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
