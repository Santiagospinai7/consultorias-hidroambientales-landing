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
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-1/2">
          {title && (
            <h6 className="text-cyan-500 text-sm font-bold uppercase mb-2">Clientes</h6>
          )}
          <h3 className="mb-6 text-2xl md:text-3xl leading-normal font-semibold">
            Satisfacción de nuestros clientes:
          </h3>
          <p className="text-slate-400 max-w-xl">
            Nuestros clientes son muy importantes para nosotros, por eso siempre buscamos brindarles el mejor servicio. Estas son nuestras estadísticas de satisfacción según nuestros clientes:
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="md:max-w-xs w-full">
            <PieChart chartData={chartData} />
          </div>
          <div className="flex flex-col">
            {clientSatisfactionData.map((item) => (
              <div key={item.id} className="flex items-center gap-2 my-1">
                <span className="block w-4 h-4" style={{ backgroundColor: item.color }}></span>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
