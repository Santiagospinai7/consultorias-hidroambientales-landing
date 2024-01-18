import { Link } from 'react-router-dom'

import { footerCompany } from '../data/dataFour'

import {FaLinkedin, FaFacebookF, FaInstagram, MdKeyboardArrowRight} from '../assets/icons/icons'

export default function Footer() {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="container relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[30px] px-0">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="lg:col-span-4 md:col-span-12">
                  <Link to="/#" className="text-[22px] focus:outline-none">
                    {/* <img src={logo_light} alt="" /> */}
                    <h1 className="text-xl font-bold text-white">Consultorías Hidroambientales</h1>
                  </Link>
                  <p className="mt-6 text-gray-300">Somos una empresa dedicada a la consultoría ambiental, con más de 10 años de experiencia en el sector.</p>
                  <ul className="list-none mt-5 space-x-1 space-y-1">
                    <li className="inline"><Link to="http://linkedin.com/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaLinkedin className='text-sm'/></Link></li>
                    <li className="inline"><Link to="https://www.facebook.com/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaFacebookF className='text-sm'/></Link></li>
                    <li className="inline"><Link to="https://www.instagram.com/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaInstagram className='text-sm'/></Link></li>
                  </ul>
                </div>

                <div className="lg:col-span-4 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">Company</h5>
                  <ul className="list-none footer-list mt-6">
                    {footerCompany.map((data, index) => (
                      <li key={index} className={data.liClass}><Link to={data.route} className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> {data.title}</Link></li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">Nos puedes encontrar</h5>
                  <div className="grid grid-cols-1 mt-2">
                    <div className="foot-subscribe my-3 md:h-[150]">
                      <div className="w-full leading-[0] border-0 h-full">
                        <iframe
                          title="google"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                          style={{ border: 0 }}
                          className="w-full h-full"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container relative text-center">
          <div className="grid md:grid-cols-2 items-center">
            <div className="md:text-start text-center">
              <p className="mb-0">© {new Date().getFullYear()} Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://www.idtechnologysas.com/" target="_blank" className="text-reset">ID Technology</Link>.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
