import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import './App.css';

ChartJS.register(...registerables);

const BarChart = ({ chartData }) => {
  const data = {
    labels: [...chartData.labels],
    datasets: [
      {
        label: 'Expense',
        data: [...chartData.data],
        backgroundColor: 'red',
        borderWidth: 3,
        borderColor: 'white',
      },
    ],
    options: {
      width: 800,
      height: 500,
    },
  };
  return (
    <>
      <div id="graph">
        <Bar className="graph" data={data} />
        <Line className="graph" data={data} />
        <Pie className="graph" data={data} />
      </div>
    </>
  );
};

export default BarChart;
