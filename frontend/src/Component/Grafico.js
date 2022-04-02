import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
      width:"200",
    },
    title: {
      display: true,
      text: 'Sales By Mounth for:',
    },
  },
  
};



 

export function Grafico(props) {
  return(
    <div>
      <Bar options={options} data={props.data} />
    </div>
    
  ) 
}

export default Grafico;