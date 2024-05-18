import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const ApexChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 145, 160, 180],
    },
  ]);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="area"
            width="470"
          />
        </div>
      </div>
    </div>
  );
};

export default ApexChart;