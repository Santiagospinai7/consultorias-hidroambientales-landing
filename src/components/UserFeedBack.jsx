import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { feedback } from '../data/dataFour'

export default function UserFeedBack() {
  return (
    <>
      <div className="container relative" id="review">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Comentarios de nuestros clientes</h3>

          <p className="text-slate-400 max-w-xl mx-auto">Nuestros clientes son muy importantes para nosotros, por eso siempre buscamos brindarles el mejor servicio, esto son algunos de los comentarios que nos han dejado.</p>
        </div>

        <div className="grid grid-cols-1 mt-8">
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
              autoplay={{
                delay: 3000,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                767: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {feedback.map((item, index) => (
                <SwiperSlide className="tiny-slide text-center mb-12" key={index}>
                  <div className="cursor-e-resize">
                    <div className="content relative shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                      <i className="mdi mdi-format-quote-open mdi-48px text-cyan-500"></i>
                      <p className="text-slate-400">{item.description}</p>
                      <ul className="list-none mb-0 text-amber-400 mt-3 space-x-1">
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                      </ul>
                    </div>

                    <div className="text-center mt-5">
                      <img src={item.image} className="h-14 w-14 rounded-full shadow-md mx-auto" alt="" />
                      <h6 className="mt-2 font-semibold">{item.name}</h6>
                      <span className="text-slate-400 text-sm">{item.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>                        
          </div>
        </div>
      </div>
    </>
  )
}
