var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    height: 400,
    type: 'pie',
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270
    }
  },
  dataLabels: {
    enabled: true,
    innerHeight: 100
  },
  fill: {
    type: 'gradient',
  },
  legend: {
    show: true,
    position: "bottom",
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#pieChart"), options);
  chart.render();