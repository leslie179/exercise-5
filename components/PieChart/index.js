import styles from './PieChart.module.css'
import { Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,   
    Tooltip,
    Legend
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

   useEffect(() => {
    setChartData({
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: '# of votes',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: [
                    'rgba(53, 162, 235, 0.4)',
                    'rgba(53, 235, 235, 0.4)',
                    'rgba(83, 62, 35, 0.4)',
                    'rgba(235, 10, 235, 0.4)',
                    'rgba(180, 180, 180, 0.4)',
                    'rgba(74, 62, 96, 0.4)'
                ],
                backgroundColor: [
                    'rgba(53, 162, 235, 0.4)',
                    'rgba(53, 235, 235, 0.4)',
                    'rgba(83, 62, 35, 0.4)',
                    'rgba(235, 10, 235, 0.4)',
                    'rgba(180, 180, 180, 0.4)',
                    'rgba(74, 62, 96, 0.4)'
                ],
                borderWidth: 1
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
        <Pie data={chartData} options={chartOptions} style={{ width: "500px", height: "300px" }} />
    </>
)
}   