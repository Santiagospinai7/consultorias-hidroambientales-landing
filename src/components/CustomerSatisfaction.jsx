// import { Link } from 'react-router-dom'
// import { Chart } from 'chart.js/auto'
// import {FiPhone} from '../assets/icons/icons'

import { Chart } from 'chart.js/auto'
import PieChart from './PieChart'
import { useState, useEffect } from 'react'
import { CategoryScale } from 'chart.js'
import { clientSatisfactionData, DataTest } from '../data/dataFour'

Chart.register(CategoryScale)

export default function CustomerSatisfaction({title}){
  // const [chartData, setCharData] = useState(clientSatisfactionData[0])
  const [chartData, setCharData] = useState({
    labels: DataTest.map((data) => data.year), 
    datasets: [
      {
        label: 'Users Gained ',
        data: DataTest.map((data) => data.userGain),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: 'black',
        borderWidth: 2
      }
    ]
  })

  useEffect(() => {
    setCharData(clientSatisfactionData[0])
  }, [])

  console.log(chartData)

  return(
    <div className="container relative">
      <div className="grid grid-cols-1 text-center">
        {title=== true ? <h6 className="text-cyan-500 text-sm font-bold uppercase mb-2">Clientes</h6> :''}
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Satisfacción de nuestros clientes:</h3>

        <p className="text-slate-400 max-w-2xl mx-auto">Nuestros clientes son muy importantes para nosotros, por eso siempre buscamos brindarles el mejor servicio, estas son nuestras estadisticas de satisfacción según nuestros clientes:</p>

        {/* <div className="mt-6">
          <Link to="/contact" className="py-2 px-5 inline-flex font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-ch-600 hover:bg-green-ch-700 border-green-ch-600 hover:border-green-ch-700 text-white rounded-md mt-4"><FiPhone className="me-1 text-lg"/>Contáctanos</Link>
        </div> */}
        <div>
          <PieChart chartData={chartData} />
        </div>
      </div>
    </div>
  )
}