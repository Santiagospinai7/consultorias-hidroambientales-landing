import { Link } from 'react-router-dom'

import {FiPhone} from '../assets/icons/icons'

export default function GetInTouch({title}){
  return(
    <div className="container relative">
      <div className="grid grid-cols-1 text-center">
        {title=== true ? <h6 className="text-cyan-500 text-sm font-bold uppercase mb-2">Contactanos</h6> :''}
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">¿Tienes alguna duda?</h3>

        <p className="text-slate-400 max-w-xl mx-auto">Si tienes alguna duda o quieres saber más sobre nuestros servicios, no dudes en contactarnos.</p>

        <div className="mt-6">
          <Link to="/contact" className="py-2 px-5 inline-flex font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-ch-600 hover:bg-green-ch-700 border-green-ch-600 hover:border-green-ch-700 text-white rounded-md mt-4"><FiPhone className="me-1 text-lg"/> Contactanos</Link>
        </div>
      </div>
    </div>
  )
}