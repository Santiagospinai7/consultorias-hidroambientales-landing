// import { Link } from 'react-router-dom'

import ab03 from '../assets/images/about/ab03.jpg'
import ab02 from '../assets/images/about/ab02.jpg'
import ab01 from '../assets/images/about/ab01.jpg'

import CountUp from 'react-countup'

// import {FaRegEnvelope} from '../assets/icons/icons'

import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function WhoWeAre(){
  const information = [
    {
      title: 'Nuestra  misión',
      description: 'Ser la elección preferida por nuestros clientes al brindar soluciones integrales, oportunas y efectivas en los servicios de limpieza, desinfección, mantenimiento e impermeabilización de tanques de agua potable, así como en la asesoría de Ingeniería Sanitaria y Ambiental. Nos enfocamos en los sectores de Empresas de Servicios Públicos, Industrial, Comercial, Institucional y Residencial, aportando a nivel local, regional y nacional.'
    },
    {
      title: 'Nuestra visión',
      description: 'Destacarnos como líderes en servicio al cliente, destacando por la seguridad, calidad y puntualidad en el desarrollo de proyectos y la prestación de servicios de Ingeniería Sanitaria Ambiental.'
    },
    {
      title: 'Nuestros valores',
      description: 'Honestidad, Trabajo en equipo, servicio, seguridad, confianza responsabilidad'
    }
  ]
  return(
    <>
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-6">
                <div className="grid grid-cols-1 gap-6">
                  <img src={ab03} className="shadow rounded-md" alt="" />
                  <img src={ab02} className="shadow rounded-md" alt="" />
                </div>
              </div>

              <div className="col-span-6">
                <div className="grid grid-cols-1 gap-6">
                  <img src={ab01} className="shadow rounded-md" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 md:col-span-6">
            <div className="lg:ms-5">
              <div className="flex mb-4">
                <span className="text-indigo-600 text-2xl font-bold mb-0"><CountUp className="counter-value text-6xl font-bold" start={1} end={15}></CountUp>+</span>
                <span className="self-end font-medium ms-2">Años <br /> De Experiencia</span>
              </div>

              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">¿Quienes somos nosotros?</h3>

              <p className="text-slate-400 max-w-2xl">Somos una empresa dedicada a ofrecer servicios especializados en limpieza, desinfección, mantenimiento e impermeabilización de tanques de agua potable, así como en el mantenimiento de plantas de tratamiento de agua y piscinas. Nuestra experiencia se extiende a la prestación de asesorías profesionales en Ingeniería Ambiental y Sanitaria, abarcando una diversidad de sectores que incluyen establecimientos institucionales, hospitalarios, comerciales, industriales y residenciales.</p>

              {/* <div className="mt-6">
                <Link to="/contact" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><FaRegEnvelope className="me-2 text-sm"/> Contactanos</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-12">
        <div className="tiny-three-item">
          {/* Using swiper I need to render in one slide 3 feedbacks and I need to have the pagination dots under */}
          <Swiper
            pagination={{
              type: 'bullets',
              clickable: true,
            }}
            navigation={true}
            loop={true}
            spaceBetween={30}
            // autoplay={{
            //   delay: 10000,
            // }}
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
          >
            {information.map((item, index) => (
              <SwiperSlide className="tiny-slide text-center mb-12" key={index}>
                <div className="cursor-e-resize flex flex-col items-center justify-center h-full">
                  <div className="lg:ms-5">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">{item.title}</h3>
                    <p className="text-slate-400 max-w-2xl">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> 


                       
        </div>
      </div>


    </>
  )
}