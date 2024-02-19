import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartProps } from './Chart.types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PriceDropBarChart = ({ startDate, endDate }: ChartProps) => {
  const [fetchedData, setFetchedData] = useState([]); // State to hold the original fetched data
  const [chartData, setChartData] = useState({ labels: [], datasets: [] }); // State for the data to render in the chart

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/readCSV');
      const result = await response.json();
      setFetchedData(result.data); 
    };

    fetchData();
  }, []);

   // Filter fetched data whenever startDate, endDate, or fetchedData changes
   useEffect(() => {
     const filterData = () => {
       let filteredData;
       
       if (startDate && endDate) {
        filteredData = fetchedData.filter(item => {
          const itemDate = new Date(item.statDate);
          const start = startDate ? new Date(startDate) : null;
          const end = endDate ? new Date(endDate) : null;
          return (!start || itemDate >= start) && (!end || itemDate <= end);
        });
       }
       
       if (!filteredData)
       filteredData = fetchedData;
      

      return formatChartData(filteredData);
    };

    if (fetchedData.length > 0) {
      setChartData(filterData()); // Update chart data with filtered or original data
     }
     
  }, [startDate, endDate, fetchedData]);

  const formatChartData = (data) => {
    const labels = data.map(item => item.statDate);
    const prices = data.map(item => item.priceDrop); 

    return {
      labels,
      datasets: [
        {
          label: 'List Price',
          data: prices,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          barThickness: 2,
        },
      ],
    };
  };

  return (
    <div className='m-5'>
      <h1 className='text-center text-xl p-4'>Price Drop Bar Chart</h1>
      <Bar data={chartData} />
    </div>
  );
};

export default PriceDropBarChart;
