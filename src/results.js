
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
    data: [488, 10, 6, 2, 3, 1, 1, 1, 1]
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
  }],
  showInLegend: false
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
    data: [72.4, 27.6],
    showInLegend: false
  }]
});

Highcharts.chart('survey-learning-to-code-years', {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['0-2 years', '3-5 years', '6-8 years', '9-11 years', '12-14 years', '15-17 years', '18-20 years', '21-23 years', '24-26 years', '30 or more years'],
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
    data: [21.5, 40.3, 20.5, 9.3, 3.6, 2.7, 1.5, 0.2, 0.2, 0.2],
    showInLegend: false
  }]
});

Highcharts.chart('survey-years-coding-professionally', {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['0-2 years', '3-5 years', '6-8 years', '9-11 years', '12-14 years', '15-17 years', '18-20 years'],
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
    data: [57.5, 25.5, 7.8, 5.4, 2.7, 0.5, 0.5],
    showInLegend: false
  }]
});

Highcharts.chart('survey-developers-are-students', {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['No', 'Yes, full-time', 'Yes, part-time', 'I dropped college'],
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
    data: [61.7, 31.1, 3.6, 3.6],
    showInLegend: false
  }]
});

Highcharts.chart('survey-educational-attainment', {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Bachelor’s degree (BA, BS, B.Eng., etc.)', 'Secondary school', 'Some college/university study without earning a degree', 'Master’s degree (MA, MS, M.Eng., MBA, etc.)', 'Primary/elementary school', 'I dropped my college/university', 'I never completed any formal education', 'Associate degree', 'Other doctoral degree (Ph.D, Ed.D., etc.)', 'Professional degree (JD, MD, etc.)'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
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
    data: [78.0, 7.1, 5.5, 4.1, 1.8, 1.1, 0.9, 0.7, 0.4, 0.4],
    showInLegend: false
  }]
});

Highcharts.chart('survey-other-education', {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Taught yourself a new language, framework, or tool without taking a formal course', 'Taken an online course in programming or software development (e.g. a MOOC)', 'Participated in online coding competitions (e.g. HackerRank, CodeChef, TopCoder)', 'Contributed to open source software', 'Participated in a full-time developer training program or bootcamp', 'Participated in a hackathon', 'Received on-the-job training in software development', 'Taken a part-time in-person course in programming or software development', 'Completed an industry certification program (e.g. MCPD)'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
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
    data: [25.4, 24.3, 12.0, 9.5, 7.7, 7.5, 6.3, 4.3, 3.1],
    showInLegend: false
  }]
});

Highcharts.chart('survey-other-education-on-own', {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['The official documentation and/or standards for the technology', 'Questions & answers on Stack Overflow', 'A book or e-book from O’Reilly, Apress, or a similar publisher', 'Online developer communities other than Stack Overflow (ex. forums, listservs, IRC channels, etc.)', 'The technology’s online help system', 'A college/university computer science or software engineering book', 'Tapping your network of friends, family, and peers versed in the technology', 'Pre-scheduled tutoring or mentoring sessions with a friend or colleague', 'Internal Wikis, chat rooms, or documentation set up by my company for employees'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
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
    data: [26.0, 24.5, 14.4, 11.0, 7.9, 6.0, 4.2, 3.1, 3.0],
    showInLegend: false
  }]
});

Highcharts.chart('survey-why-hackathons', {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['The official documentation and/or standards for the technology', 'Questions & answers on Stack Overflow', 'A book or e-book from O’Reilly, Apress, or a similar publisher', 'Online developer communities other than Stack Overflow (ex. forums, listservs, IRC channels, etc.)', 'The technology’s online help system', 'A college/university computer science or software engineering book', 'Tapping your network of friends, family, and peers versed in the technology', 'Pre-scheduled tutoring or mentoring sessions with a friend or colleague', 'Internal Wikis, chat rooms, or documentation set up by my company for employees'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
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
    data: [26.0, 24.5, 14.4, 11.0, 7.9, 6.0, 4.2, 3.1, 3.0],
    showInLegend: false
  }]
});

Highcharts.chart('survey-why-hackathons', {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['To improve my general technical skills or programming ability', 'Because I find it enjoyable', 'To improve my knowledge of a specific programming language, framework, or other technology', 'To build my professional network', 'To help me find new job opportunities', 'To win prizes or cash awards', 'To improve my ability to work on a team with other programmers'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
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
    data: [33.8, 24.6, 18.5, 9.2, 6.9, 4.6, 2.3],
    showInLegend: false
  }]
});

Highcharts.chart('survey-finding-bootcamp', {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['I already had a full-time job as a developer when I began the program', 'Immediately after graduating', 'Less than a month', 'I haven’t gotten a developer job', 'One to three months', 'Four to six months', 'Six months to a year', 'Longer than a year'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
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
    data: [25.7, 24.3, 14.3, 14.3, 10.0, 5.7, 5.7, 0.0],
    showInLegend: false
  }]
});
