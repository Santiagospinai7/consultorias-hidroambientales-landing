import amazon from '../assets/images/client/amazon.svg'
import google from '../assets/images/client/google.svg'
import lenovo from '../assets/images/client/lenovo.svg'
import paypal from '../assets/images/client/paypal.svg'
import shopify from '../assets/images/client/shopify.svg'
import spotify from '../assets/images/client/spotify.svg'

const logos = [amazon, google, lenovo, paypal, shopify, spotify]

export default function CompanyLogo({animate = true}) {
  if (animate) {
    return (
      <div className="w-[200%] h-16 overflow-hidden relative flex items-center">
        <div className="w-[400%] sm:w-[300%] md:w-[200%] flex items-center h-10 justify-around absolute left-0 animate animate">
          {logos.map((logo, index) => (
            <div key={index} className="mx-auto py-1">
              <img src={logo} className="h-6" alt={`logo-${index}`} />
            </div> 
          ))}
          {logos.map((logo, index) => (
            <div key={index} className="mx-auto py-1">
              <img src={logo} className="h-6" alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
        <div className="mx-auto py-4">
          <img src={amazon} className="h-6" alt="" />
        </div>
  
        <div className="mx-auto py-4">
          <img src={google} className="h-6" alt="" />
        </div>
  
        <div className="mx-auto py-4">
          <img src={lenovo} className="h-6" alt="" />
        </div>
  
        <div className="mx-auto py-4">
          <img src={paypal} className="h-6" alt="" />
        </div>
  
        <div className="mx-auto py-4">
          <img src={shopify} className="h-6" alt="" />
        </div>
  
        <div className="mx-auto py-4">
          <img src={spotify} className="h-6" alt="" />
        </div>
      </div>
    )
  }
}
