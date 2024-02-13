import { useState } from 'react'
import { Chart, CategoryScale } from 'chart.js/auto'
import { clientSatisfactionData } from '../data/dataFour'
import PieChart from './PieChart'

Chart.register(CategoryScale)

export default function CustomerSatisfaction({ title }) {
  const [chartData] = useState({
    labels: clientSatisfactionData.map((data) => data.label),
    datasets: [
      {
        label: 'Satisfacción del cliente',
        data: clientSatisfactionData.map((data) => data.satisfactionPercentage),
        backgroundColor: clientSatisfactionData.map((data) => data.color),
        borderWidth: 1,
      },
    ],
  })

  return (
    <div className="container relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
        <div className="md:w-1/2">
          {title && (
            <h6 className="text-cyan-500 text-sm font-bold uppercase mb-2">Clientes</h6>
          )}
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Satisfacción de nuestros clientes:
          </h3>
          <p className="text-slate-400 max-w-xl">
            Nuestros clientes son muy importantes para nosotros, por eso siempre buscamos brindarles el mejor servicio. Estas son nuestras estadísticas de satisfacción según nuestros clientes:
          </p>
        </div>
        <div className="md:w-1/2 flex md:flex-row flex-col items-center mt-10">
          <div className="md:max-w-xs w-full">
            <PieChart chartData={chartData} />
          </div>
          <div className="flex flex-wrap pt-5 gap-3 items-center">
            {clientSatisfactionData.map((item) => (
              <div key={item.id} className="flex gap-2 my-1 m-auto">
                <span className="block w-4 h-4" style={{ backgroundColor: item.color }}></span>
                <span className="text-sm px-1">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
