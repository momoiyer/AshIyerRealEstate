// SimpleLineChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';



ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PriceDropLineChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/readCSV');
      const fetchedData  = await response.json();

      // Process and format the data for the chart
      const formattedData = formatChartData(fetchedData.data);
      setChartData(formattedData);
    };

    fetchData();
  }, []);

  const formatChartData = (data) => {
    const labels = data.map(item => item.statDate);
    const prices = data.map(item => item.priceDrop); // Remove $ and commas

    return {
      labels,
      datasets: [
        {
          label: 'List Price',
          data: prices,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
      ],
    };
  };

  return <Line data={chartData} />;
};

export default PriceDropLineChart;
