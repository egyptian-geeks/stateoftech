
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

Highcharts.chart('survey-developers-types', {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Back-end developer', 'Full-stack developer', 'Front-end developer', 'Mobile developer', 'Student', 'C-suite executive (CEO, CTO, etc.)', 'Desktop or enterprise applications developer', 'Engineering manager', 'Data scientist or machine learning specialist', 'DevOps specialist', 'UI/UX Designer', 'Data or business analyst', 'Database administrator', 'System administrator', 'Embedded applications or devices developer', 'Product manager', 'Educator or academic researcher', 'Game or graphi developer', 'Marketing or sales professional', 'QA or test developer', 'Security Analyst'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Percentage'
    },
    labels: {
      formatter: function() {
         return this.value+"%";
      }
    }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{y} %'
      }
    }
  },
  series: [{
    name: 'Percentage',
    data: [49.80, 37.50, 28.90, 23.20, 11.60, 7.00, 6.10, 6.10, 5.90, 5.90, 5.70, 4.80, 4.50, 3.60, 3.40, 3.20, 2.00, 2.00, 1.60, 0.70, 0.70]
  }]
});

Highcharts.chart('survey-opensource-contribution', {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Yes', 'No'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Percentage'
    },
    labels: {
      formatter: function() {
         return this.value+"%";
      }
    }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{y} %'
      }
    }
  },
  series: [{
    name: 'Percentage',
    data: [61, 39]
  }]
});

Highcharts.chart('survey-coding-hobby', {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Yes', 'No'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Percentage'
    },
    labels: {
      formatter: function() {
         return this.value+"%";
      }
    }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{y} %'
      }
    }
  },
  series: [{
    name: 'Percentage',
    data: [77, 23]
  }]
});
