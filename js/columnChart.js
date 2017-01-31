$(function() {
  Highcharts.chart('columnChart', { 
      chart: {
        type: 'column'
      },
      title: {
        text: 'Technology Confidence Index'
      },
      xAxis: {
        categories: [
        'Technologies'
      ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        ceiling: 100,
        title: {
          text: 'Personal Confidence (percent)'
        }
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      colors: [
        '#59993D',
        '#148ECC',
        '#FFC300',
        '#4BCC14',
        '#59993D',
        '#0E6EFF',
        '#148ECC',
        '#141ECC'
      ],
      series: [{
          name: 'HTML',
          data: [100]
    },
        {
          name: 'CSS',
          data: [95]
    },
        {
          name: 'Sass',
          data: [75]
        },
        {
          name: 'JavaScript',
          data: [90]
    },
        {
          name: 'jQuery',
          data: [85]
    },
        {
          name: 'Angular',
          data: [75]
    },
        {
          name: 'React',
          data: [60]
},
        {
          name: 'highcharts',
          data: [90]
    }]
    });
});
