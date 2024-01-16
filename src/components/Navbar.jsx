import logo_dark from '../assets/images/logo-dark.png'
import logo_light from '../assets/images/logo-light.png'
import '../assets/libs/@mdi/font/css/materialdesignicons.min.css'
import '../assets/css/tailwind.css'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(props) {
  let { navClass, navJustify } = props
  let [isMenu, setisMenu] = useState(false)
  let [manu, setManu] = useState('')
  let location = useLocation()

  useEffect(() => {
    let current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    setManu(current)

    function windowScroll() {
      const navbar = document.getElementById('topnav')
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
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
      anchorArray.forEach(element => {
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

  return (
    <nav id="topnav" className={`defaultscroll ${navClass === 'nav-light' ? '' : navClass === 'nav-sticky' ?
      'bg-white dark:bg-slate-900' : ''}`}>
      <div className="container relative flex justify-between items-center">
        <div>
          {navClass === 'nav-light' ? (
            <Link className="logo" to="/home">
              <span className="inline-block dark:hidden">
                <img src={logo_dark} className="l-dark" height="24" alt="" />
                <img src={logo_light} className="l-light" height="24" alt="" />
              </span>
              <img src={logo_light} height="24" className="hidden dark:inline-block" alt="" />
            </Link>
          ) : (
            <Link className="logo" to="/home">
              <img src={logo_dark} className="inline-block dark:hidden" alt="" />
              <img src={logo_light} className="hidden dark:inline-block" alt="" />
            </Link>
          )}
        </div>

        <div className="menu-extras">
          <div className="menu-item">
            <Link to="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
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
            <li className={manu === 'home' || '' ? 'active' : ''}><Link to="/home" className="sub-menu-item">Home</Link></li>

            <li className={manu === 'about-us' || '' ? 'active' : ''}><Link to="/about-us" className="sub-menu-item">About us</Link></li>

            <li className={`${['services'].includes(manu)? 'active' : ''} has-submenu parent-parent-menu-item`}>
              <Link to="#!">Servicios</Link><span className="menu-arrow"></span>
              <ul className="submenu">
                <li className={`${['about-us'].includes(manu)? 'active' : ''} has-submenu parent-menu-item`}><Link to="#"> Lavado de tanques </Link>
                  {/* <ul className="submenu">
                    <li className={manu === 'about-us' || '' ? 'active' : ''}><Link to="/about-us" className="sub-menu-item"> About Us</Link></li>
                    <li className={manu === 'page-services' || '' ? 'active' : ''}><Link to="/page-services" className="sub-menu-item">Services</Link></li>
                    <li className={manu === 'page-team' || '' ? 'active' : ''}><Link to="/page-team" className="sub-menu-item"> Team</Link></li>
                    <li className={manu === 'page-pricing' || '' ? 'active' : ''}><Link to="/page-pricing" className="sub-menu-item">Pricing</Link></li>
                    <li className={manu === 'page-testimonial' || '' ? 'active' : ''}><Link to="/page-testimonial" className="sub-menu-item">Testimonial </Link></li>
                  </ul> */}
                </li>
                <li className={`${['about-us'].includes(manu)? 'active' : ''} has-submenu parent-menu-item`}><Link to="#"> Lavado de piscinas </Link></li>
              </ul>
            </li>

            <li className={`${['products'].includes(manu)? 'active' : ''} has-submenu parent-parent-menu-item`}>
              <Link to="#!">Productos</Link><span className="menu-arrow"></span>
              <ul className="submenu">
                <li className={`${['about-us', 'page-services','page-team', 'page-pricing', 'page-testimonial'].includes(manu)? 'active' : ''} has-submenu parent-menu-item`}><Link to="#"> Piscinas </Link><span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li className={manu === 'about-us' || '' ? 'active' : ''}><Link to="/about-us" className="sub-menu-item"> Producto 1</Link></li>
                    <li className={manu === 'page-services' || '' ? 'active' : ''}><Link to="/page-services" className="sub-menu-item">Producto 2</Link></li>
                  </ul>
                </li>
                <li className={`${['about-us', 'page-services','page-team', 'page-pricing', 'page-testimonial'].includes(manu)? 'active' : ''} has-submenu parent-menu-item`}><Link to="#"> Tanques </Link><span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li className={manu === 'about-us' || '' ? 'active' : ''}><Link to="/about-us" className="sub-menu-item"> Producto 3</Link></li>
                    <li className={manu === 'page-services' || '' ? 'active' : ''}><Link to="/page-services" className="sub-menu-item">Producto 4</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className={manu === 'contact' || '' ? 'active' : ''}><Link to="/contact" className="sub-menu-item">Contactanos</Link></li>
          </ul>
        </div>
      </div >
    </nav >
  )
}
