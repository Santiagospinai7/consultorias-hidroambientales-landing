// import amazon from '../assets/images/client/amazon.svg'
// import google from '../assets/images/client/google.svg'
// import lenovo from '../assets/images/client/lenovo.svg'
// import paypal from '../assets/images/client/paypal.svg'
// import shopify from '../assets/images/client/shopify.svg'
// import spotify from '../assets/images/client/spotify.svg'

// import { Autoplay } from 'swiper/modules'
// import { Swiper, SwiperSlide } from 'swiper/react'

// export default function CompanyLogo({animate = true}){
//   if (!animate) {
//     return(
// <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
//   <div className="mx-auto py-4">
//     <img src={amazon} className="h-6" alt="" />
//   </div>
  
//   <div className="mx-auto py-4">
//     <img src={google} className="h-6" alt="" />
//   </div>
  
//   <div className="mx-auto py-4">
//     <img src={lenovo} className="h-6" alt="" />
//   </div>
  
//   <div className="mx-auto py-4">
//     <img src={paypal} className="h-6" alt="" />
//   </div>
  
//   <div className="mx-auto py-4">
//     <img src={shopify} className="h-6" alt="" />
//   </div>
  
//   <div className="mx-auto py-4">
//     <img src={spotify} className="h-6" alt="" />
//   </div>
// </div>
//     )
//   } else {
//     return (
//       <Swiper
//         autoplay={{
//           delay: 1000,
//         }}
//         spaceBetween={30}
//         loop={true}
//         speed={1000}
//         effect='slide'
//         modules={[Autoplay]}
//         breakpoints={{
//           320: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//           },
//           767: {
//             slidesPerView: 4,
//             spaceBetween: 30,
//           },
//           992: {
//             slidesPerView: 6,
//             spaceBetween: 30,
//           },
//         }}
//       >
//         <SwiperSlide className="text-center">
//           <img src={amazon} className="h-6" alt="" />
//         </SwiperSlide>
//         <SwiperSlide className="text-center">
//           <img src={google} className="h-6" alt="" />
//         </SwiperSlide>
//         <SwiperSlide className="text-center">
//           <img src={lenovo} className="h-6" alt="" />
//         </SwiperSlide>
//         <SwiperSlide className="text-center">
//           <img src={paypal} className="h-6" alt="" />
//         </SwiperSlide>
//         <SwiperSlide className="text-center">
//           <img src={shopify} className="h-6" alt="" />
//         </SwiperSlide>
//         <SwiperSlide className="text-center">
//           <img src={spotify} className="h-6" alt="" />
//         </SwiperSlide>
//       </Swiper>
//     )
//   }
// }

import { useSpring, animated } from 'react-spring'

import amazon from '../assets/images/client/amazon.svg'
import google from '../assets/images/client/google.svg'
import lenovo from '../assets/images/client/lenovo.svg'
import paypal from '../assets/images/client/paypal.svg'
import shopify from '../assets/images/client/shopify.svg'
import spotify from '../assets/images/client/spotify.svg'

export default function CompanyLogo() {
  const logoProps = useSpring({
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(-100%)' },
    loop: true,
    config: { duration: 15000 }, // Adjust the duration as needed
  })

  return (
    <div className="logo-container">
      <animated.div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]" style={logoProps}>
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
      </animated.div>
    </div>
  )
}
