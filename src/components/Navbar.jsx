import text_logo from '../assets/images/ch/logo/hidroambientales.png'
import '../assets/css/tailwind.css'
import { useState, useEffect } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

export default function Navbar(props) {
  const { navClass, navJustify } = props
  const [isMenu, setisMenu] = useState(false)
  const [path, setPath] = useState('')
  const [manu, setManu] = useState('')
  const location = useLocation()

  useEffect(() => {
    let current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)

    // get current path
    let path = location.pathname
    console.log('path', path)
    setPath(path)
    setManu(current)

    console.log('path', path)

    function windowScroll() {
      const navbar = document.getElementById('topnav')
      if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        if (navbar !== null) {
          navbar?.classList.add('nav-sticky')
          // navbar?.classList.remove('bg-opacity-10')
        }
      } else {
        if (navbar !== null) {
          // navbar?.classList.add('bg-opacity-')
          // navbar?.classList.remove('nav-sticky')
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
  
    // Close the navbar on mobile
    setisMenu(false)
  }

  const menuItemClicked = () => {
    // Close the navbar on mobile
    setisMenu(false)
  }

  // const scrollTo = (location) => {
  //   const targetId = location
  //   const targetElement = document.getElementById(targetId)

  //   if (targetElement) {
  //     scroll.scrollTo(targetElement.offsetTop, {
  //       duration: 800,
  //       smooth: 'easeInOutQuart',
  //     })
  //   } else {
  //     navigate('/home#' + targetId)
  //   }
  // }



  return (
    <nav
      id="topnav"
      className={`defaultscroll ${navClass === 'nav-light' ? '' : navClass === 'nav-sticky' ? 'bg-white dark:bg-slate-900' : ''} nav-sticky`}
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
              <Link onClick={() => menuItemClicked()} to="/home" className="sub-menu-item">
                Home
              </Link>
            </li>

            <li className={manu === 'about-us' || '' ? 'active' : ''}>
              <Link onClick={() => menuItemClicked()} to="/about-us" className="sub-menu-item">
                About us
              </Link>
            </li>

            <li className={`${['/services/1'].includes(path) ? 'active' : '' || ['/services/2'].includes(path) ? 'active' : '' || ['/services/3'].includes(path) ? 'active' : '' || ['/services/4'].includes(path) ? 'active' : ''} has-submenu parent-parent-menu-item`}>
              <a className="sub-menu-item" onClick={() => scrollTo('services')}>
                Servicios
              </a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li className={`${['/services/1'].includes(path) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="services/1">Diseño, Construccion, Operacion Plantas de Tratamiento de Agua Potable</Link>
                </li>
                <li className={`${['/services/2'].includes(path) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="services/2">Lavado y desinfeccion de Tanques de Agua Potable</Link>
                </li>
                <li className={`${['/services/3'].includes(path) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="services/3">Impermeabilización de tanques de agua</Link>
                </li>
                <li className={`${['/services/4'].includes(path) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="services/4">Diseño, construccion y operacion de Piscinas</Link>
                </li>
                <li className={`${['/services/5'].includes(path) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <Link to="services/5">Asesoría y Capacitación</Link>
                </li>
                <li className={`${['about-us'].includes(path) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <a className="sub-menu-item" onClick={() => scrollTo('products')}>
                  Suministro de equipos,productos quimicos para acueductos y piscinas
                  </a>
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
                  <a className="sub-menu-item" onClick={() => scrollTo('products')}>
                    Cloro granulado
                  </a>
                </li>
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <a className="sub-menu-item" onClick={() => scrollTo('products')}>
                  Clarificante
                  </a>
                </li>
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <a className="sub-menu-item" onClick={() => scrollTo('products')}>
                  Reductor
                  </a>
                </li>
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <a className="sub-menu-item" onClick={() => scrollTo('products')}>
                  Desengrasante
                  </a>
                </li>
                <li className={`${['about-us'].includes(manu) ? 'active' : ''} has-submenu parent-menu-item`}>
                  <a className="sub-menu-item" onClick={() => scrollTo('products')}>
                  Filtrante de vidrio
                  </a>
                </li>
              </ul>
            </li>

            <li className={manu === 'contact' || '' ? 'active' : ''}>
              <Link onClick={() => menuItemClicked()} to="/contact" className="sub-menu-item">
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
