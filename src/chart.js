import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './App.css';

ChartJS.register(...registerables);

const BarChart = ({ chartData }) => {
  const data = {
    labels: [...chartData.labels],
    datasets: [
      {
        label: 'Expense',
        data: [...chartData.data],
        backgroundColor: 'rgba(92,9,192,1)',
        borderWidth: 1,
      },
    ],
    options: {
      width: 1200,
      height: 600,
    },
  };
  return (
    <>
      <div id="graph">
        <Bar className="graph" data={data} />
      </div>
    </>
  );
};

export default BarChart;
