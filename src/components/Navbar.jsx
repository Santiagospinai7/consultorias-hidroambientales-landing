// import logo_dark from '../assets/images/logo-dark.png'
// import logo_light from '../assets/images/logo-light.png'
import text_logo from '../assets/images/ch/logo/logo_transparente.png'
import '../assets/libs/@mdi/font/css/materialdesignicons.min.css'
import '../assets/css/tailwind.css'
import { useState, useEffect } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

export default function Navbar(props) {
  const { navClass, navJustify } = props
  const [isMenu, setisMenu] = useState(false)
  const [manu, setManu] = useState('')
  const location = useLocation()

  useEffect(() => {
    let current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    setManu(current)

    function windowScroll() {
      const navbar = document.getElementById('topnav')
      if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        if (navbar !== null) {
          navbar?.classList.add('nav-sticky')
        }
      } else {
        if (navbar !== null) {
          navbar?.classList.remove('nav-sticky')
        }
      }
    }
    window.addEventListener('scroll', windowScroll)
    window.scrollTo(0, 0)
    return () => {
      window.removeEventListener('scroll', windowScroll)
    }
  }, [location.pathname.substring(location.pathname.lastIndexOf('/') + 1)])

  const toggleMenu = () => {
    setisMenu(!isMenu)
    if (document.getElementById('navigation')) {
      const anchorArray = Array.from(document.getElementById('navigation').getElementsByTagName('a'))
      anchorArray.forEach((element) => {
        element.addEventListener('click', (elem) => {
          const target = elem.target.getAttribute('href')
          if (target !== '') {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling
              submenu.classList.toggle('open')
            }
          }
        })
      })
    }
  }

  const navigate = useNavigate()

  const scrollTo = (location) => {
    const targetId = location
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      scroll.scrollTo(targetElement.offsetTop, {
        duration: 800,
        smooth: 'easeInOutQuart',
      })
    } else {
      navigate('/home#' + targetId)
    }
  }



  return (
    <nav
      id="topnav"
      className={`defaultscroll ${navClass === 'nav-light' ? '' : navClass === 'nav-sticky' ? 'bg-white dark:bg-slate-900' : ''}`}
    >
      <div className="container relative flex justify-between items-center">
        <div className='max-w-11'>
          {navClass === 'nav-light' ? (
            <Link className="logo" to="/home">
              <img src={text_logo} className="inline-block dark:hidden .max-w-md max-h-20" alt="" />
            </Link>
          ) : (
            <Link className="logo" to="/home">
              <img src={text_logo} className="inline-block dark:hidden .max-w-md max-h-20" alt="" />
            </Link>
          )}
        </div>

        <div className="menu-extras">
          <div className="menu-item">
            <Link
              to="#"
              className={`navbar-toggle ${isMenu ? 'open' : ''}`}
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>

        <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
          <ul className={`navigation-menu ${navClass} ${navJustify}`}>
            <li className={manu === 'home' || '' ? 'active' : ''}>
              <Link to="/home" className="sub-menu-item">
                Home
              </Link>
            </li>

            <li className={manu === 'about-us' || '' ? 'active' : ''}>
              <Link to="/about-us" className="sub-menu-item">
                About us
              </Link>
            </li>

            <li className={`${['services'].includes(manu) ? 'active' : ''} has-submenu parent-parent-menu-item`}>
              <a className="sub-menu-item" onClick={() => scrollTo('services')}>
                Servicios
              </a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="#">Desinfección Potable</Link>
                </li>
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="#">Mantenimiento</Link>
                </li>
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="#">Tratamiento Integral</Link>
                </li>
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="#">Mantenimiento Piscinas</Link>
                </li>
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="#">Asesoría y Capacitación</Link>
                </li>
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="#">Venta De Productos Químicos</Link>
                </li>
              </ul>
            </li>

            <li className={`${['products'].includes(manu) ? 'active' : ''} has-submenu parent-parent-menu-item`}>
              <a className="sub-menu-item" onClick={() => scrollTo('products')}>
                Productos
              </a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="#">Cloro granulado</Link>
                </li>
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="#">Clarificante</Link>
                </li>
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="#">Reductor</Link>
                </li>
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="#">Desengrasante</Link>
                </li>
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="#">Filtrante de vidrio</Link>
                </li>
              </ul>
            </li>

            <li className={manu === 'contact' || '' ? 'active' : ''}>
              <Link to="/contact" className="sub-menu-item">
                Contactanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
