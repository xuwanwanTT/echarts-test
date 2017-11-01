import echarts from 'echarts'

let calendar = echarts.init(document.querySelector('.calendar'))

let option = {
  title: {
    text: '日历'
  },
  tooltip: {},
  visualMap: {
    show: false,
    min: 0,
    max: 1000
  },
  calendar: {
    range: '2017'
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: ['2017-01-01','2017-05-01']
  }
}

calendar.setOption(option)
