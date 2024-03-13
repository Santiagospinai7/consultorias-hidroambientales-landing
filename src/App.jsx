import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import WhatsAppButton from './components/WhatsAppButton'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import ServiceDetail from './pages/ServiceDetail'

import emailjs from '@emailjs/browser'

import { Helmet } from 'react-helmet'

function App() {
  emailjs.init('Vij97Pf05QFGOVOLb')

  return (
    <BrowserRouter>
      <Helmet>
        <title>Consultorias Hidroambientales</title>
        <meta name="description" content="Consultorias Hidroambientales es una empresa especializada en el diseño, construcción, operación y mantenimiento de sistemas de tratamiento de aguas residuales, potabilización, desinfección y lavado de tanques." />
        <meta name="keywords" content="tanques, lavado, cali, impermeabilizacion, desinfeccion, piscinas, lavado de tanques cali, impermeabilizacion de tanques, psicinas cali, acuavalle, agua cali, tratamiento de agua" />
        <meta name="author" content="Consultorias Hidroambientales" />
        <meta property="og:title" content="Consultorias Hidroambientales" />
        <meta property="og:description" content="Consultorias Hidroambientales es una empresa especializada en el diseño, construcción, operación y mantenimiento de sistemas de tratamiento de aguas residuales, potabilización, desinfección y lavado de tanques." />
        <meta property="og:url" content="https://consultoriashidroambientales.co" />
      </Helmet>
      <Navbar navClass="nav-light" />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  )
}

export default App
