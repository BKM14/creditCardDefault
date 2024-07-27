import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ dataInput, title }) => {
    const chartData = {
        labels: ['Class 0', 'Class 1'],
        datasets: [{
            label: ["Probability"],
            data: [dataInput[0], dataInput[1]],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: title,
            }
        }
    };

    return (
        <div style={{ margin: '20px auto' }} className='flex-1 flex lg:w-1/2 md:w-1/3'>
            <Doughnut data={chartData} options={options} />
        </div>
    );
};

export default DoughnutChart;
