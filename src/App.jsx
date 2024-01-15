import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
