import { Link,useParams } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'


import 'react-18-image-lightbox/style.css'

import { servicesData } from '../data/dataFour'

export default function ServiceDetail() {
  let params = useParams()
  let id = params.id

  let data = servicesData[id - 1]
  let Icons = data?.icon

  return (
    <>
      <section
        className="relative table w-full py-72 bg-no-repeat bg-top bg-cover"
        style={{ backgroundImage: `url(${data.banner_bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-5">
              <div className="lg:-mt-[330px] -mt-[299px]">
                <div className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                  <div className="text-center py-6 p-6 border-b border-gray-100 dark:border-gray-700">
                    <div className="w-20 h-20 mx-auto bg-indigo-600/5 text-cyan-500 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                      <Icons className='w-12 h-12'/>
                    </div>
                    <h5 className="mt-5 text-xl font-semibold mb-0 ">{data?.title ? data?.title : 'Thomas Brewer'}</h5>
                  </div>

                  <div className="p-6 m-0 text-center">
                    <Link to="/contact" className="py-2 px-5 my-0 mx-auto inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-ch-600 hover:bg-green-ch-700 border-green-ch-600 hover:border-green-ch-700 text-white rounded-md">Contáctanos</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 md:col-span-7">
              {/* If data has before_after show detalle */}
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{data.desc}</h3>
              <h4 className="text-xl font-semibold text-cyan-500">Detalle :</h4>
              <div className="text-slate-400 mt-4">
                {data.detail}
              </div>
              {/* <p className="text-slate-400 mt-4">{data.detail}</p> */}
              
              {data.before_after && (
                <div className='mt-8'>
                  <Swiper
                    pagination={{
                      type: 'bullets',
                      clickable: true,
                    }}
                    navigation={true}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                      delay: 3000,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                  >
                    {data.before_after.map((item, index) => (
                      // Container in the middle that has at the top the title and below the image
                      <SwiperSlide className="tiny-slide text-center mb-12" key={index}>
                        <div className="cursor-e-resize">
                          <div className="content relative shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                            <p className=" text-semibold">{item.title}</p>
                            <img src={item.image} className="h-48 w-full object-cover rounded-md shadow-md mx-auto" alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper> 
                </div>
              ) || ''
              }

              <h4 className="mt-8 text-xl font-semibold text-cyan-500">Algunos de nuestros trabajos:</h4>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8">
                {(data.photos).slice(0,4).map((item,index)=>{
                  return(
                    <div key={index} className="group relative block overflow-hidden rounded-md transition-all duration-500">
                      <img src={item} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt="" />
                      <div className="absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0"></div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
