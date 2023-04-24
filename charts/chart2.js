var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
<<<<<<< HEAD
    height: 350,
    type: 'donut',
=======
    height: 400,
    type: 'pie',
>>>>>>> 1e4b86ae7ccc609ac0dc731dff40b25644912bcb
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