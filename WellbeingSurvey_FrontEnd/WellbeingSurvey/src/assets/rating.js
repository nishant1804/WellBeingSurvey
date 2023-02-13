$(function () { 
    Highcharts.setOptions({
      colors: ['#67BCE6'],
      chart: {
          style: {
              fontFamily: 'sans-serif',
              color: '#fff'
          }
      }
  });  
    $('#container').highcharts({
          chart: {
              type: 'column',
              backgroundColor: '#36394B'
          },
          title: {
              text: 'Weekly Revenue',
              style: {  
                color: '#fff'
              }
          },
          xAxis: {
              tickWidth: 0,
              labels: {
                style: {
                    color: '#fff',
                   }
                },
              categories: ['May 5', 'May 6', 'May 7', 'May 8', 'May 9', 'May 10', 'May 11']
          },
          yAxis: {
             gridLineWidth: .5,
                gridLineDashStyle: 'dash',
                gridLineColor: 'black',
             title: {
                  text: '',
                  style: {
                    color: '#fff'
                   }
              },
              labels: {
                formatter: function() {
                          return '$'+Highcharts.numberFormat(this.value, 0, '', ',');
                      },
                style: {
                    color: '#fff',
                   }
                }
              },
          legend: {
              enabled: false,
          },
          credits: {
              enabled: false
          },
          tooltip: {
             valuePrefix: '$'
          },
          plotOptions: {
                column: {
                    borderRadius: 2,
               pointPadding: 0,
                    groupPadding: 0.1
              } 
              },
          series: [{
              name: 'Revenue',
              data: [2200, 2800, 2300, 1700, 2000, 1200, 1400]
          }]
      });
  });