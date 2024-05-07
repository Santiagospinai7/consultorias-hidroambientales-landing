import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// import logo_icon_64 from '../assets/images/logo-icon-64.png'
import logo_gota from '../assets/images/ch/logo/logo.png'
import {FiPhone,FaRegEnvelope} from '../assets/icons/icons'

// import CookieModal from '../components/CookieModal'
import GetInTouch from '../components/GetInTouch'
import AboutImage from '../components/AboutImage'
// import UserFeedBack from '../components/UserFeedBack'
import CompanyLogo from '../components/companyLogo'
import CustomerSatisfaction from '../components/CustomerSatisfaction'

import '../../node_modules/react-modal-video/css/modal-video.css'

// import Lightbox from 'react-18-image-lightbox'
import 'react-18-image-lightbox/style.css'

// import {FaArrowRight} from '../assets/icons/icons'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { servicesData , productData } from '../data/dataFour'

import { useLocation } from 'react-router-dom'

// import p67_image from '../assets/images/ch/freepik/p67.jpg'
import banner_image from '../assets/images/ch/new/banner.jpg'

import { Helmet } from 'react-helmet'

export default function Home() {
  const scrollToAbout = () => {
    scroll.scrollTo('about', {
      duration: 800,
      smooth: 'easeInOutQuart',
    })
  }

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      let targetId = location.hash.substring(1)
      let targetElement = document.getElementById(targetId)
      if (targetElement) {
        scroll.scrollTo(targetElement.offsetTop, {
          duration: 800,
          smooth: 'easeInOutQuart',
        })
      }
    }
  }, [location])

  return (
    <>
      <Helmet>
        <title>Consultorias Hidroambientales</title>
        <meta name="description" content="Consultorias Hidroambientales es una empresa especializada en la consultoría ambiental, contamos con una gran trayectoria en el sector ofreciendo servicios de calidad." />
        <meta name="keywords" 
          content="lavado de tanques cali, acuavalle, lavado de piscinas cali, lavado de piscinas coombia, consultoria, ambiental, agua, potable, piscinas, acueductos, tanques, lavado, desinfeccion, impermeabilizacion, Diseño, Construccion, Operacion Plantas de Tratamiento de Agua Potable, Lavado y desinfeccion de tanques de agua potable, Impermeabilización de tanques de agua, Diseño, construccion y operacion de Piscinas" />
        <meta name="author" content="Consultorias Hidroambientales" />
        <meta property="og:title" content="Consultorias Hidroambientales" />
        <meta property="og:description" content="Consultorias Hidroambientales es una empresa especializada en la consultoría ambiental, contamos con una gran trayectoria en el sector ofreciendo servicios de calidad." />
        <meta property="og:url" content="https://consultoriashidroambientales.co" />
      </Helmet>
      <section className="py-36 md:py-48 w-full table relative bg-center bg-no-repeat bg-cover">
        <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <img
            src={banner_image}
            className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <img src={logo_gota} className="mx-auto" width={80} height={100} alt="Gota" />
            <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium my-6 position-relative">Consultorias hidroambientales</h4>

            <p className="text-white opacity-80 mb-0 max-w-xl text-lg mx-auto underline">Contribuir  a la salud y bienestar de las comunidades en Colombia.</p>
            
            <div className="text-white mb-0 mt-8 max-w-xl mx-auto">
              <div className='flex justify-center items-center mx-2 my-2 bg-green-400 opacity-100 rounded-2xl p-2'>
                {/* <div className='flex justify-center items-center'> */}
                <FiPhone className="w-5 h-5 mx-2"/> 
                {/* <p className="mb-0">Contáctanos</p> */}
                {/* </div> */}
                <p className="mb-0 font-bold">+57 313 613 6848</p>
              </div>
              <div className='flex justify-center items-center mx-2 my-2 bg-transparent opacity-100 rounded-2xl p-2'>
                <FaRegEnvelope className="w-5 h-5 mx-2"/> 
                <p className="mb-0">consultoriashidroambientales@gmail.com</p>
              </div>
            </div>

                

            <div className="relative mt-8">
              <Link to="/about-us" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-ch-600 hover:bg-green-ch-700 border-green-ch-600 hover:border-green-ch-700 text-white rounded-md" >Acerca de nosotros</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
          <ScrollLink to="about" smooth={true} duration={800}>
            <i
              className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800 cursor-pointer"
              onClick={scrollToAbout}
            ></i>
          </ScrollLink>
        </div>

        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
          <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <section className="relative md:pt-24 pt-16 md:pb-12 pb-8" id="about">
        <div className="container relative">
          <AboutImage grid="md:col-span-5"/>
        </div>
      </section>

      <section className="md:pb-12 pb-8" id="clients">
        <CompanyLogo />
      </section>

      <section className="relative bg-gray-50 md:py-24 py-16" id="services">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-cyan-500 text-sm font-bold uppercase mb-2">Servicios</h6>
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Nuestros servicios</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">Somos una empresa dedicada a la consultoría ambiental, contamos con una gran trayectoria en el sector ofreciendo servicios de calidad, que son: </p>
            {/* order list */}
            <div className="text-center mt-4 text-slate-400">
              <ol>
                <li><a href="/services/1">1) Diseño, Construccion, Operacion Plantas de Tratamiento de Agua Potable</a></li>
                <li><a href="/services/2">2) Lavado y desinfeccion de tanques de agua potable</a></li>
                <li><a href="/services/3">3) Impermeabilización de tanques de agua</a></li>
                <li><a href="/services/4">4) Diseño, construccion y operacion de Piscinas</a></li>
                <li><a href="/services/5">5) Asesoría y Capacitación</a></li>
                <li><a href="/home#products">6) Suministro de equipos,productos quimicos para acueductos y piscinas</a></li>
              </ol>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
            {servicesData.map((item, index) => {
              let Icons = item.icon
              return (
                <Link to={item.link} className="group relative block overflow-hidden rounded-md transition-all duration-500" key={index}>
                  {item.banner_bg && (
                    <img src={item.banner_bg} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 object-cover w-full h-full" alt="" />
                  )}

                  <div className="absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0"></div>

                  <div className="content">
                    <div className="title absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
                      <div className="w-20 h-20 bg-indigo-600/5 text-white rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                        <Icons className='w-7 h-7'/>
                      </div>
                      <h6 className="text-md font-medium text-white duration-500 ease-in-out">{item.title}</h6>
                      <p className="text-white mt-3">{item.desc}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      <section className="relative py-16 md:py-24" id='products'>
        <div className="container mx-auto">
          <div className="text-center pb-8">
            <h6 className="text-cyan-500 text-sm font-bold uppercase mb-2">Productos</h6>
            <h3 className="mb-4 md:text-4xl text-3xl font-semibold text-cyan-700">Nuestros productos</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">Somos proveedores de productos de calidad, contamos con una gran trayectoria en el sector ofreciendo productos de calidad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
            {productData.map((item, index) => (
              <div key={index} className="text-center px-4">
                <div className="group relative block overflow-hidden rounded-lg shadow-lg mx-auto transition-all duration-500 mb-5" style={{ maxWidth: '250px', height: '300px' }}>
                  <img src={item.image} alt={item.name} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 w-full h-full object-cover" style={{ objectPosition: 'center' }} />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-500 z-0"></div>
                </div>
                <Link to="#" className="text-lg text-black transition duration-500 ease-in-out mt-5">{item.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gray-50 md:py-24 py-16">
        <CustomerSatisfaction title={true}/>
      </section>
      {/* <section className="relative md:py-24 py-16">
        <div >
          <UserFeedBack />
        </div>
      </section> */}
      <section className="relative md:py-24 py-16">
        <GetInTouch title={true}/>
      </section>
      {/* <CookieModal /> */}
    </>
  )
}
