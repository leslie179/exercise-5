import styles from './VerticalChart.module.css'
import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function VerticalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

   useEffect(() => {
    setChartData({
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                label: 'Sales $',
                data: [125431, 4564, 78978, 4564654, 134056, 868761, 86687],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.4)'
            }
        ]
    })

    setChartOptions({
        plugins: {
            legend: {
                position: 'top'
            },       
            title: {
                display: true,
                text: "Daily Revenue"
            }
    },
        maintainAspectRation: false,
        responsive: true
    })
}, [])

return (
    <>
        <Bar data={chartData} options={chartOptions} style={{ width: "500px", height: "300px" }} />
    </>
)
}   