import styles from './Graph.module.css';
import { Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement, 
    Filler
)
const Graph = ({fetchanalytics, analytics}) => {
    const [chart, setchart] = useState([])
    const [numbers, setNumbers] = useState([]);
    const [months, setMonths] = useState([]);
    const monthMapping = {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec',
      };
    useEffect(()=>{
        const sortedNumbers = analytics?.data?.data?.analyticsData?.sort((a, b) => a.month - b.month);
        setNumbers(sortedNumbers);
        const assignedMonths = sortedNumbers?.map((number) => monthMapping[number.month]);
        setMonths(assignedMonths);
    }, [analytics])

    const data = {
        labels:["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Sep"],
        datasets: [{
            data:[100, 200, 300, 100, 250, 450, 300, 400],
            backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 179.63);
                gradient.addColorStop(0, "rgb(248, 109, 109)");
                gradient.addColorStop(1, "rgb(255, 233, 233)");
                return gradient;
              },
            borderColor: "#B11226",
            // pointBorderColor:'transparent',
            pointBorderWidth: 4,
            tension: 0.4,
            fill: true
        }]

    }
    const option = {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false,
        Plugin: {
            legend: false
        },
        scales: {
            x: {
                min: 0,
                max: 12,
                ticks: {
                    stepSize: 1
                },
                grid:{
                    display:false
                }
            },
            y: {
                min: 0,
                max: 700,
                ticks: {
                    stepSize: 100
                },
                grid:{
                    borderDash:[100]
                }
            }

        }
    }
    return ( 
        <div className={styles.graph}>
            <Line data={data} options={option}></Line>
        </div>
    );
}
 
export default Graph;