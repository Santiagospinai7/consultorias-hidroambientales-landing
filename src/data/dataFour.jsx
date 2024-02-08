import {FiAirplay,MdApi,TbCameraPlus,PiFlowerLight,HiOutlineCog6Tooth,FaRegComment,BiWallet,LuImagePlus,LuSave,BiShieldAlt2,MdOutlineCalendarMonth,RiMailSendLine, FiPhone, FaRegEnvelope, RiMapPinLine } from '../assets/icons/icons'

import { TbWashEco } from 'react-icons/tb'
import { GiWaterTank } from 'react-icons/gi'
import { FaHandsHelping } from 'react-icons/fa'
import { FaSwimmingPool } from 'react-icons/fa'
import { FaShoppingBasket } from 'react-icons/fa'

import client1 from '../assets/images/client/01.jpg'
import client2 from '../assets/images/client/02.jpg'
import client3 from '../assets/images/client/03.jpg'
import client4 from '../assets/images/client/04.jpg'
import client5 from '../assets/images/client/05.jpg'
import client6 from '../assets/images/client/06.jpg'

import product1 from '../assets/images/products/8151754.jpg'

// service 1
import image11 from '../assets/images/ch/lavado_desinfeccion/p11.jpg'
import image17 from '../assets/images/ch/lavado_desinfeccion/p17.jpg'
import image36 from '../assets/images/ch/lavado_desinfeccion/p36.jpg'
import image48 from '../assets/images/ch/lavado_desinfeccion/p48.jpeg'
import image47 from '../assets/images/ch/lavado_desinfeccion/p47.jpeg'


// service 2
import image58 from '../assets/images/ch/mantenimiento_plantas/p58.jpg'
import image8 from '../assets/images/ch/impermeabilizacion_de_tanques/p8.webp'
import image9 from '../assets/images/ch/impermeabilizacion_de_tanques/p9.webp'
import impermeabilizacion_bg from '../assets/images/ch/bgs/impermeabilizacion.webp'

// service 3
import image60 from '../assets/images/ch/mantenimiento_plantas/p60.jpg'
import image59 from '../assets/images/ch/mantenimiento_plantas/p59.jpg'

// service 4
// import image52 from '../assets/images/ch/mantenimiento_piscinas/p52.jpg'
import image53 from '../assets/images/ch/mantenimiento_piscinas/p53.jpg'
import image54 from '../assets/images/ch/mantenimiento_piscinas/p54.jpg'
import image55 from '../assets/images/ch/mantenimiento_piscinas/p55.jpg'
import image56 from '../assets/images/ch/mantenimiento_piscinas/p56.jpg'
import image57 from '../assets/images/ch/mantenimiento_piscinas/p57.jpg'
import mantenimiento_piscinas_bg from '../assets/images/ch/bgs/mantenimiento_piscina.webp'

// service 5
// import image2 from '../assets/images/ch/asesoria_capacitacion/p2.jpg'
import image3 from '../assets/images/ch/asesoria_capacitacion/p3.webp'
import image5 from '../assets/images/ch/asesoria_capacitacion/p5.webp'
import image6 from '../assets/images/ch/asesoria_capacitacion/p6.webp'

// service 6
import venta_productos_bg from '../assets/images/ch/bgs/venta_productos.webp'


export const servicesData = [
  {
    id:1,
    icon:TbWashEco,
    title:'Lavado y desinfección de tanques',
    desc:'Lavado y desinfección de tanques de almacenamiento de agua potable.',
    link: '/services/1',
    detail : (
      <p>
        Según resolución No. 4145.0.21.0382 Secretaria de Salud Pública Municipal (21 de noviembre de 2014),  en edificios y clínicas,  hospitales, unidades residenciales, zona industrial - fabricas, centros comerciales, universidades, colegios, empresas de suministro de agua potable;  Donde establece que los tanques para almacenamiento de agua potable deben lavarse y desinfectarse mínimo cada 4 meses. Esto posibilita el retiro de los barros decantados en el fondo del tanque, la eliminación de hongos y el perfecto funcionamiento del sistema para garantizar una buena calidad del agua para el consumo humano.
      </p>
    ),
    photos: [image17, image36],
    before_after: [
      { title:'Antes', image:image48 },
      { title:'Después', image:image47 }
    ],
    banner_bg: image11,
  },
  {
    id:2,
    icon:HiOutlineCog6Tooth,
    title:'Impermeabilización de tanques de agua',
    desc:'Mantenimiento e impermeabilización de tanques de agua potable.',
    link: '/services/2',
    detail : (
      <p>
        Los tanques de agua potable desempeñan un papel fundamental en la provisión de agua segura y de calidad a las comunidades, con el fin de asegurar un suministro confiable, es esencial contar con un sistema de impermeabilización adecuado en estos tanques, el cual es realizado con epoxicos y membranas grado agua potable, donde se hace un recubrimiento en el tanque de agua, que nos garantiza una impermeabilidad y asepsia de la superficie, asi como la protección contra filtraciones, posibles perdidas de agua, mantenimiento adecuado de la estructura, cumplimiento  de estándares con base a las normas de la secretaria de salud y confianza de los usuarios.
      </p>
    ),
    photos: [image8, image9],
    banner_bg: impermeabilizacion_bg,
  },
  {
    id:3,
    icon:GiWaterTank,
    title:'Operación y mantenimiento de plantas',
    desc:'Operación y mantenimiento de plantas de tratamiento de agua.',
    link: '/services/3',
    detail : (
      <p>
        La calidad del agua que se consume en una localidad está determinada entre otros factores por la calidad de la fuente, el tratamiento que se aplica para potabilizarla, el estado de las instalaciones físicas y de los equipos, la disponibilidad de los recursos necesarios para el funcionamiento de las instalaciones de tratamiento y la disponibilidad de personal para operar y mantener adecuadamente dichas instalaciones. <br /> El objetivo de la operación y mantenimiento de una planta es el control de calidad para obtener mejores resultados en la calidad del agua apta para el consumo humano. Debe incluir el control de calidad en procesos, como captación, bombeo, filtración, separación de sólidos, procesos bioquímicos aeróbicos o anaeróbicos, uso de lodos activados, decantación y descarga, entre otros.
      </p>
    ),
    photos: [image60, image59],
    banner_bg: image58,
  },
  {
    id:4,
    icon:FaSwimmingPool,
    title:'Mantenimiento Piscinas',
    desc:'Mantenimiento general de piscinas.',
    link: '/services/4',
    detail : (
      <>
        <p>
        Un buen mantenimiento de la piscina, permite mantenerla en perfectas condiciones, garantizando el perfecto funcionamiento.
        </p>
        <br />
        
        <p>- Un adecuada higiene de una piscina es esencial para la salud y seguridad de los bañistas. Dado que su mantenimiento debe ser periódico y concienzudo.</p>
        <br />
        <p>- Colocar en manos de profesionales la piscina te garantiza <strong> mantener el agua de la piscina </strong>en perfectas condiciones. Sin impurezas, microorganismos ni saturación de productos químicos utilizados para la limpieza.</p>
        
      </>
    ),
    photos: [image53, image54, image55, image56, image57],
    banner_bg: mantenimiento_piscinas_bg,
  },
  {
    id:5,
    icon:FaHandsHelping,
    title:'Asesoría y Capacitación',
    desc:'Asesoría y capacitación de tratamiento de aguas y piscinas.',
    link: '/services/5',
    detail : 'La presencia de bacterias, virus y otros patógenos en las plantas ,  tanques de agua y en piscinas  puede causar enfermedades transmitidas por el agua, como gastroenteritis, diarrea y hepatitis. La desinfección adecuada ayuda a eliminar estos microorganismos. Por ello es tan importante contar con el personal capacitado de acuerdo a la normatividad y los estándares de calidad de agua.',
    photos: [image5, image6],
    banner_bg: image3,
  },
  {
    id:6,
    icon:FaShoppingBasket,
    title:'Venta De Productos Químicos',
    desc:'Venta de productos quimicos para el tratamiento de aguas.',
    link: '/home#products',
    detail : '',
    photos: [],
    banner_bg: venta_productos_bg,
  },
]
export const productData = [
  {
    image:product1,
    name:'Cloro granulado 70%',
    title:'Producto'
  },
  {
    image:product1,
    name:'Clarificante',
    title:'Producto'
  },
  {
    image:product1,
    name:'Reductor',
    title:'Producto'
  },
  {
    image:product1,
    name:'Desengrasante',
    title:'Producto'
  },
  {
    image:product1,
    name:'Filtrante de vidrio',
    title:'Producto'
  }
]
export const nftAbout = [
  {
    icon: BiWallet,
    title:'Connect your wallet',
    desc:'Use Trust Wallet, Metamask or any wallet to connect to the app.'
  },
  {
    icon: LuImagePlus,
    title:'Create your NFT Item',
    desc:'Upload your NFTs and set a title, description and price.'
  },
  {
    icon: LuSave,
    title:'List them for sale',
    desc:'Earn ETH and BIT for all your NFTs that you sell on our marketplace.'
  },
]
export const paymentFeature = [
  {
    icon:BiShieldAlt2,
    title:'Secured Payment',
    desc:'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon:MdOutlineCalendarMonth,
    title:'Easy to use',
    desc:'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon:RiMailSendLine,
    title:'Support',
    desc:'The phrasal sequence of the is now so that many campaign and benefit'
  },
]
export const personalServices =[
  {
    icon:FiAirplay,
    title:'UX / UI Design',
    decs:'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon:MdApi,
    title:'IOS App Designer',
    decs:'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon:TbCameraPlus,
    title:'Photography',
    decs:'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon:PiFlowerLight,
    title:'Graphic Designer',
    decs:'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon:HiOutlineCog6Tooth,
    title:'Web Security',
    decs:'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon:FaRegComment,
    title:'24/7 Support',
    decs:'The phrasal sequence of the is now so that many campaign and benefit'
  },
]
export const footerCompany = [
  {
    liClass: '',
    route: '/about-us',
    title: 'Acerca de nosotros',
  },
  {
    liClass: 'm-0',
    route: '/contact',
    title: 'Contáctanos',
  },
  // {
  //   liClass: 'mt-[10px]',
  //   route: '/services',
  //   title: 'Servicios',
  // },
  // {
  //   route: '/products',
  //   title: 'Productos',
  //   liClass: 'mt-[10px]',
  // },
  // {
  //   route: '/terms',
  //   title: 'Terminos de servicio',
  //   liClass: 'mt-[10px]',
  // }
]
export const feedback =[
  {
    description: '" Hola "',
    image: client1,
    name: 'Calvin Carlo',
    role: 'Manager'
  },
  {
    description: '" The most well-known dummy text is the \'Lorem Ipsum\', which is said to have originated in the 16th century. "',
    image: client2,
    name: 'Christa Smith',
    role: 'Manager'
  },
  {
    description: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
    image: client3,
    name: 'Jemina CLone',
    role: 'Manager'
  },
  {
    description: '" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "',
    image: client4,
    name: 'Smith Vodka',
    role: 'Manager'
  },
  {
    description: '" There is now an abundance of readable dummy texts. These are usually used when a text is required. "',
    image: client5,
    name: 'Cristino Murfi',
    role: 'Manager'
  },
  {
    description: '" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "',
    image: client6,
    name: 'Cristino Murfi',
    role: 'Manager'
  }
]
export const contactData = [
  {
    icon:FiPhone,
    title:'Teléfono',
    desc:'Este es nuestro número de contacto',
    contact:'+57 313 613 6848',
    link: 'tel:+573136136848'
  },
  {
    icon:FaRegEnvelope,
    title:'Correo',
    desc:'Este es nuestro correo de contacto',
    contact:'consultoriashidroambientales@gmail.com',
    link: '#'
  },
  {
    icon:RiMapPinLine,
    title:'Ubicación',
    desc:'Este es nuestro ubicación',
    contact:'Av. 4a Oe. #4 - 43',
    link: 'https://www.google.com/maps/place/Av.+4a+Oe.+%234+-+43,+Normandia+Sebastian+de+Belalcazar,+Cali,+Valle+del+Cauca/@3.4519829,-76.5455043,19z/data=!3m1!4b1!4m6!3m5!1s0x8e30a679bb7c2bbf:0x1fe0006bda697e8f!8m2!3d3.4519816!4d-76.5448606!16s%2Fg%2F11j8lptndd?entry=ttu'
  }
]

export const clientSatisfactionData = [
  {
    labels: ['Muy insatisfecho', 'Un Poco satisfecho', 'Neutral', 'Bastante satisfecho', 'Muy satisfecho'],
    datsets: [1, 2, 2, 15, 80],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
    ],
    borderWidth: 1
  }
]

export const DataTest = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234
  }
]
