<<<<<<< HEAD
var pmsData = {
  name: "PMS",
  data: [256, 384, 297, 436]
=======
var pmsData = ""
var corData = ""

fetch()

pmsData = {
  name: "PMS",
  pmsData: [256, 384, 297, 436]
>>>>>>> 1e4b86ae7ccc609ac0dc731dff40b25644912bcb
}

var correctiveData = {
  name: "CORRECTIVE",
<<<<<<< HEAD
  data: [384, 297, 436, 256]
=======
  corData: [384, 297, 436, 256]
>>>>>>> 1e4b86ae7ccc609ac0dc731dff40b25644912bcb
}

var barChartOptions = {
    series: [
      pmsData,
      correctiveData,
    ],
    chart: {
    type: 'bar',
    height: 400,
    width: '100%',
    height: '95%',
    colors: "ffbf00",
    toolbar: {
        show: false
    },
  },
  colors: [
    "#ffbf00", 'rgb(64,156,255)'
  ],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "80%",
    }
  },
  tooltip:{
    enabled: true,
  },
  fill: {
    type: 'gradient',
  },
  dataLabels: {
    enabled: true
  },
  legend: {
    show: true,
  },
  yaxis: {
    labels:{
      style:{
        colors: "#1d1d1f",
      },
    },
  },
  xaxis: {
    labels:{
      style:{
        colors: "#1d1d1f"
      },
    },
    categories: ["January", "February", "March", "April"],
  },
};

  var barChart = new ApexCharts(document.querySelector("#barChart"), barChartOptions);
  barChart.render();