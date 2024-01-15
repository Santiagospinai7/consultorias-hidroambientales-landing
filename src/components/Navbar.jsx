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

            <li className={`${['page-services','page-team', 'page-pricing','page-testimonial','user-profile','user-billing','user-payment','user-invoice','user-notification','user-setting','property-listing','property-detail','course-listing','course-detail','nft-explore','nft-auction','nft-collection','nft-creators','nft-creator-profile','nft-creator-profile-edit','nft-wallet','nft-create-item','nft-detail','food-recipe','shop-grid','shop-grid','shop-grid-two','shop-item-detail','shop-cart','shop-checkout','food-recipe','shop-grid','shop-grid-two','shop-item-detail','shop-cart','shop-checkout','shop-account','food-recipe','shop-grid','shop-grid-two','shop-item-detail','shop-cart','shop-checkout','shop-account','photography-about','photography-portfolio','page-job-grid','page-job-detail','page-job-apply','page-job-post','page-job-career','page-job-candidates','page-job-candidate-detail','page-job-companies','page-Job-company-detail','forums-topic','forums-comments','helpcenter-overview','helpcenter-faqs','helpcenter-guides','helpcenter-support','blog','blog-sidebar','blog-detail','blog-standard-post','blog-slider-post','blog-gallery-post','blog-youtube-post','blog-vimeo-post','blog-audio-post','blog-blockquote-post','blog-left-sidebar-post','email-confirmation','email-password-reset','email-alert','email-invoice','auth-login','auth-signup','auth-re-password','auth-lock-screen','page-terms','page-privacy','page-comingsoon','page-maintenance','page-error','page-thankyou','contact-detail','contact-one','contact-two'].includes(manu)? 'active' : ''} has-submenu parent-parent-menu-item`}>
              <Link to="#!">Servicios</Link><span className="menu-arrow"></span>
              <ul className="submenu">
                <li className={`${['about-us', 'page-services','page-team', 'page-pricing', 'page-testimonial'].includes(manu)? 'active' : ''} has-submenu parent-menu-item`}><Link to="#"> Company </Link><span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li className={manu === 'about-us' || '' ? 'active' : ''}><Link to="/about-us" className="sub-menu-item"> About Us</Link></li>
                    <li className={manu === 'page-services' || '' ? 'active' : ''}><Link to="/page-services" className="sub-menu-item">Services</Link></li>
                    <li className={manu === 'page-team' || '' ? 'active' : ''}><Link to="/page-team" className="sub-menu-item"> Team</Link></li>
                    <li className={manu === 'page-pricing' || '' ? 'active' : ''}><Link to="/page-pricing" className="sub-menu-item">Pricing</Link></li>
                    <li className={manu === 'page-testimonial' || '' ? 'active' : ''}><Link to="/page-testimonial" className="sub-menu-item">Testimonial </Link></li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item"><Link to="#!"> Multi Level Menu</Link><span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li><Link to="#!" className="sub-menu-item">Level 1.0</Link></li>
                    <li className="has-submenu child-menu-item"><Link to="#!"> Level 2.0 </Link><span className="submenu-arrow"></span>
                      <ul className="submenu">
                        <li><Link to="#!" className="sub-menu-item">Level 2.1</Link></li>
                        <li><Link to="#!" className="sub-menu-item">Level 2.2</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className={manu === 'contact-one' || '' ? 'active' : ''}><Link to="/contact-one" className="sub-menu-item">Contact</Link></li>
          </ul>
        </div>
      </div >
    </nav >
  )
}
