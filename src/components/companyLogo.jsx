import logo_1 from '../assets/images/ch/clients/Acuavalle.png'
import logo_2 from '../assets/images/ch/clients/Club_campestre.png'
import logo_3 from '../assets/images/ch/clients/Club_tequendama.png'
import logo_4 from '../assets/images/ch/clients/Fundacion_ideal.png'
import logo_5 from '../assets/images/ch/clients/haciendas_de_potrerito.png'
import logo_6 from '../assets/images/ch/clients/IPS_VIVIR.png'
import logo_7 from '../assets/images/ch/clients/Premier.png'
import logo_8 from '../assets/images/ch/clients/San_Buenaventura.png'
import logo_9 from '../assets/images/ch/clients/tugo.webp'
import logo_10 from '../assets/images/ch/clients/Universidad_del_Valle.png'

const logos = [ logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_7, logo_8, logo_9, logo_10 ]

export default function CompanyLogo({animate = true}) {
  if (animate) {
    return (
      // <>
      //   <div>
      //     <h1 className="text-2xl text-center mb-4 md:text-3xl md:leading-normal leading-normal font-semibold">Empresas que han confiado en nosotros:</h1>
      //   </div>
      //   <div className="w-[200%] h-32 overflow-hidden relative flex items-center">
      //     <div className="w-[400%] sm:w-[300%] md:w-[200%] flex items-center justify-around absolute left-0 animate">
      //       {logos.map((logo, index) => (
      //         <div key={index} className="mx-auto py-1">
      //           <img src={logo} className="h-20 sm:h-10 md:h-10" alt={`logo-${index}`} />
      //         </div> 
      //       ))}
      //       {logos.map((logo, index) => (
      //         <div key={index} className="mx-auto py-1">
      //           <img src={logo} className="h-20 sm:h-1 md:h-1" alt={`logo-${index}`} />
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </>
      <>
        <h1 className="text-2xl text-center mb-4 md:text-3xl md:leading-normal leading-normal font-semibold">Empresas que han confiado en nosotros:</h1>
        <div className="grid lg:grid-cols-5 grid-cols-2 justify-items-center gap-[30px]">
          {
            logos.map((logo, index) => (
              <div key={index} className="mx-auto py-4 justify-self-center">
                <img src={logo} className="h-14" alt={`logo-${index}`} />
              </div>
            ))
          }
        </div>
      </>
    )
  } else {
    return (
      <div className="grid md:grid-cols-5 grid-cols-2 justify-center gap-[30px]">
        {
          logos.map((logo, index) => (
            <div key={index} className="mx-auto py-4">
              <img src={logo} className="h-14" alt={`logo-${index}`} />
            </div>
          ))
        }
      </div>
    )
  }
}
