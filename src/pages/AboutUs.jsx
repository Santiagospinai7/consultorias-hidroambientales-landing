import { Link } from 'react-router-dom'

import image from '../assets/images/client/01.jpg'
import image1 from '../assets/images/client/02.jpg'
import image2 from '../assets/images/client/03.jpg'
import image3 from '../assets/images/client/04.jpg'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../../node_modules/react-modal-video/css/modal-video.css'
import * as Icon from 'react-feather'
import {MdKeyboardArrowRight} from '../assets/icons/icons'
import CompanyLogo from '../components/companyLogo'
import AboutUsServices from '../components/AboutUsServices'
import WhoWeAre from '../components/WhoWeAre'

export default function AboutUs() {
  const teamData = [
    {
      image:image,
      name:'Ronny Jofra',
      title:'C.E.O.',
      desc:'If the distribution of letters and \'words\' is random'
    },
    {
      image:image1,
      name:'Aliana Rosy',
      title:'HR',
      desc:'If the distribution of letters and \'words\' is random'
    },
    {
      image:image2,
      name:'Sofia Razaq',
      title:'C.O.O.',
      desc:'If the distribution of letters and \'words\' is random'
    },
    {
      image:image3,
      name:'Micheal Carlo',
      title:'Director',
      desc:'If the distribution of letters and \'words\' is random'
    },
  ]
  return (
    <>
      <Navbar navClass="nav-light" />
      <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/company/aboutus.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">About Us</h3>

            <p className="text-slate-300 text-lg max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className=" tracking-[0.5px]  mb-0 inline-flex items-center space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Home</Link></li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Aboutus</li>
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
          <CompanyLogo/>
        </div>

      </section>

      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Key Features</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
          </div>

          <AboutUsServices/>

          <div className="grid grid-cols-1 justify-center">
            <div className="mt-6 text-center">
              <Link to="/page-services" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">See More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 md:pb-0 pb-0" id="team">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Professional Team</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
          </div>

          <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            {teamData.map((item,index)=>{
              return(
                <div key={index} className="lg:col-span-3 md:col-span-6">
                  <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
                    <img src={item.image} className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
      
                    <div className="content mt-4">
                      <Link  className="text-lg font-medium hover:text-indigo-600 block">{item.name}</Link>
                      <span className="text-slate-400 block">{item.title}</span>
      
                      <p className="text-slate-400 mt-4">{item.desc}</p>
      
                      <ul className="list-none mt-4 space-x-1">
                        <li className="inline"><Link  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Facebook className="h-4 w-4"></Icon.Facebook></Link></li>
                        <li className="inline"><Link  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Instagram className="h-4 w-4"></Icon.Instagram></Link></li>
                        <li className="inline"><Link  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Twitter className="h-4 w-4"></Icon.Twitter></Link></li>
                        <li className="inline"><Link  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Linkedin className="h-4 w-4"></Icon.Linkedin></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
