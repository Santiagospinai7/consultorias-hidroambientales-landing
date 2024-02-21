import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import contact from '../assets/images/contact.svg'

import {MdKeyboardArrowRight} from '../assets/icons/icons'
import * as Icon from 'react-feather'
import { contactData } from '../data/dataFour'

import banner_image from '../assets/images/ch/lavado_desinfeccion/p30.jpg'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [comments, setComments] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  onsubmit = (e) => {
    e.preventDefault()
    
    // console.log(name, email, subject, comments)
  }
    
  return (
    <>
      <section className="relative table w-full py-36  bg-center bg-no-repeat bg-cover">
        <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <img
            src={banner_image}
            className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">Contáctanos</h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Home</Link></li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Contáctanos</li>
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
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {contactData.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center relative block overflow-hidden rounded-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                    <Icon className="w-7 h-7"/>
                  </div>

                  <div className="content mt-7">
                    <h5 className="title h5 text-lg md:text-xl font-medium">{item.title}</h5>
              
                    <div className="mt-5">
                      <Link to={item.link} target="_blank" className="relative inline-block font-semibold tracking-wide text-base text-indigo-600 hover:text-cyan-500 duration-500">
                        {item.contact}
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <img src={contact} alt="" />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">Pongamonos en contacto!</h3>

                  <form>
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label htmlFor="name" className="font-semibold">Nombre:</label>
                          <div className="form-icon relative mt-2">
                            <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Nombre :" />
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label htmlFor="email" className="font-semibold">Correo:</label>
                          <div className="form-icon relative mt-2">
                            <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Correo :" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <div className="text-start">
                          <label htmlFor="subject" className="font-semibold">Pregunta:</label>
                          <div className="form-icon relative mt-2">
                            <Icon.Book className="w-4 h-4 absolute top-3 start-4"></ Icon.Book>
                            <input value={subject} onChange={(e) => setSubject(e.target.value)} name="subject" id="subject" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Pregunta :" />
                          </div>
                        </div>
                      </div>

                      <div className="mb-5">
                        <div className="text-start">
                          <label htmlFor="comments" className="font-semibold">Comentario:</label>
                          <div className="form-icon relative mt-2">
                            <Icon.MessageCircle className="w-4 h-4 absolute top-3 start-4"></Icon.MessageCircle>
                            <textarea value={comments} onChange={(e) => setComments(e.target.value)} name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Mensaje :"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" id="submit" name="send" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-ch-600 hover:bg-green-ch-700 border-green-ch-600 hover:border-green-ch-700 text-white rounded-md justify-center flex items-center">Enviar Mensaje</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="w-full leading-[0] border-0">
            <iframe  title='google' src="https://maps.google.com/maps?q=Edificio%20Torresloma&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border:0}} className="w-full h-[500px]" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
