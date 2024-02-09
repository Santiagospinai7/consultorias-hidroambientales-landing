import { Pie } from 'react-chartjs-2'

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: 'Satisfacción de nuestros clientes 2023',
            },
            legend: {
              display: false, // Oculta la leyenda de Chart.js si quieres usar la personalizada
            },
          },
          maintainAspectRatio: false, // Permite que el tamaño del gráfico sea más flexible
        }}
      />
    </div>
  )
}

export default PieChart
