import { Link } from 'react-router-dom'
import '../../node_modules/react-modal-video/css/modal-video.css'

import {MdKeyboardArrowRight} from '../assets/icons/icons'
import CompanyLogo from '../components/companyLogo'
import WhoWeAre from '../components/WhoWeAre'

import banner_image from '../assets/images/ch/lavado_desinfeccion/p34.jpg'

import {FaRegEnvelope} from '../assets/icons/icons'

import { Helmet } from 'react-helmet'

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>Acerca de Nosotros</title>
        <meta name="description" content="Consultorias Hidroambientales es una empresa especializada en el diseño, construcción, operación y mantenimiento de sistemas de tratamiento de aguas residuales, potabilización, desinfección y lavado de tanques." />
        <meta name="keywords" content="tanques, lavado, cali, impermeabilizacion, desinfeccion, piscinas" />
        <meta name="author" content="Consultorias Hidroambientales" />
        <meta property="og:title" content="Acerca de Nosotros" />
        <meta property="og:description" content="Consultorias Hidroambientales es una empresa especializada en el diseño, construcción, operación y mantenimiento de sistemas de tratamiento de aguas residuales, potabilización, desinfección y lavado de tanques." />
        <meta property="og:url" content="https://consultoriashidroambientales.co/about-us" />        
      </Helmet>
      <section className="relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover">
        <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <img
            src={banner_image}
            className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Acerca de nosotros</h3>

            <p className="text-white opacity-80 underline text-lg max-w-xl mx-auto">Nuestra Pasión: Sostenibilidad y Servicio de Calidad.</p>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className=" tracking-[0.5px]  mb-0 inline-flex items-center space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Home</Link></li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">About us</li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16">
        <WhoWeAre/>
        <div className="container relative mt-8">
          <CompanyLogo animate={false}/>
        </div>

      </section>

      <section className="relative  md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="team">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Conoce nuestro equipo</h3>

            <p className="text-slate-400 max-w-2xl mx-auto">Contamos con un equipo de profesionales altamente capacitados y competentes, consolidándonos en proyectos ambientales y de Saneamiento Básico de gran envergadura. Este respaldo y la confianza obtenida a nivel del suroccidente colombiano son testimonio de nuestro compromiso y excelencia en el campo.</p>
          
            <div className="mt-6">
              <Link to="/contact" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-ch-600 hover:bg-green-ch-700 border-green-ch-600 hover:border-green-ch-70 text-white rounded-md me-2 mt-2"><FaRegEnvelope className="me-2 text-sm"/> Contáctanos</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
