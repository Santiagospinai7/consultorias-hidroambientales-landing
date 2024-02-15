import { useState } from 'react'
import { Link } from 'react-router-dom'

// import about01 from '../assets/images/business/about01.jpg'
// import about02 from '../assets/images/business/about02.jpg'

// import p14 from '../assets/images/ch/lavado_desinfeccion/p14.jpg'
// import p32 from '../assets/images/ch/lavado_desinfeccion/p14.jpg'
// import p36 from '../assets/images/ch/lavado_desinfeccion/p14.jpg'


// import p36 from '../assets/images/ch/lavado_desinfeccion/p36.JPG'
import p38 from '../assets/images/ch/lavado_desinfeccion/p38.JPG'
// import operario_img from '../assets/images/ch/new/Operario pisicinas 2.jpg'

// import p37 from '../assets/images/ch/lavado_desinfeccion/p37.JPG'

import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/css/modal-video.css'

export default function AboutImage({grid}){
  const [isOpen, setOpen] = useState(false)
  return(
    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
      <div className={grid}>
        <div className="relative lg:me-8">
          <img src={p38} className="rounded-md max-h-[400px] opacity-90" alt="" />
          <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
            <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
              className="lightbox h-14 w-14 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-cyan-500">
              <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
            </Link>
          </div>
          {/* <div className="absolute bottom-24 end-0">
            <img src={p37} className="rounded-md shadow-md w-48 h-48" alt="" />
            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
              <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
                className="lightbox h-14 w-14 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-cyan-500">
                <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JeHv6g0mpUI" onClose={() => setOpen(false)} />

      <div className="md:col-span-6">
        <div className="lg:ms-5">
          <h6 className="text-cyan-500 text-sm font-bold uppercase mb-2">Acerca de nosotros</h6>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Expertos en Cuidado Ambiental y Sanitario</h3>

          <p className="text-slate-400 max-w-2xl mb-6">En Consultorías Hidroambientales, nos enorgullece ser reconocidos como expertos en el cuidado ambiental y sanitario. Con una dedicación inquebrantable a la preservación de nuestros recursos naturales y la promoción de la salud, hemos consolidado nuestra posición como líderes en soluciones integrales.</p>
        </div>

        <div className="lg:ms-5">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">¿Por qué elegirnos?</h3>

          <p className="text-slate-400 max-w-2xl mb-6">Porque garantizamos calidad respaldada por personal certificado en calidad de agua y seguridad industrial. Nos destacamos en trabajo seguro en alturas y espacios confinados. Buscamos la plena satisfacción del cliente, cumpliendo normas ambientales y de seguridad. Avalados por la Secretaría de Salud, cumplimos con la norma técnica colombiana NTC 4576 y directrices municipales para lavado y desinfección de instalaciones de almacenamiento de agua potable. Elige confianza, experiencia y compromiso con la seguridad y el medio ambiente.</p>
        </div>
      </div>
    </div>
  )
}