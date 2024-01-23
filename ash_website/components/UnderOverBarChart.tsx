import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UnderOverBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/readCSV');
      const fetchedData = await response.json();

      const formattedData = formatChartData(fetchedData.data);
      setChartData(formattedData);
    };

    fetchData();
  }, []);

  const formatChartData = (data) => {
    const labels = data.map(item => item.statDate);
    const prices = data.map(item => item.underOverList); 

    return {
      labels,
      datasets: [
        {
          label: 'List Price',
          data: prices,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          barThickness: 1.5,
        },
      ],
    };
  };

  return <Bar data={chartData} />;
};

export default UnderOverBarChart;
