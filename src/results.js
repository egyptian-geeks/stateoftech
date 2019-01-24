
Highcharts.chart('survey-respondents', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Survey Respondents'
  },
  xAxis: {
    categories: ['Egypt', 'United Arab Emirates', 'Saudi Arabia', 'Palestine', 'Oman', 'Qatar', 'Morocco', 'Iraq', 'Tunisia']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Survey Respondents'
    }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true
      }
    }
  },
  series: [{
    name: 'Respondents',
    data: [475, 10, 6, 2, 2, 1, 1, 1, 1]
  }]
});
