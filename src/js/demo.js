import echarts from 'echarts'
import '../index.css'

let myChart = echarts.init(document.querySelector('.demo'))

let option1 = {
  title: {
    text: '饼图嵌套',
  },
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: '小圆',
      type: 'pie',
      radius: [0,'30%'],
      label: {
        normal: {
          position: 'inner'
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {value: 200,name: '红色',itemStyle: {normal:{color: 'red'}}},
        {value: 100,name: '绿色',itemStyle: {normal:{color: 'green'}}},
        {value: 300,name: '蓝色',itemStyle: {normal:{color: 'blue'}}}
      ]
    },
    {
      name: '大圆',
      type: 'pie',
      radius: ['50%','80%'],
      data: [
        {value: 200,name: '红色',itemStyle: {normal:{color: 'red'}}},
        {value: 100,name: '绿色',itemStyle: {normal:{color: 'green'}}},
        {value: 300,name: '蓝色',itemStyle: {normal:{color: 'blue'}}}
      ]
    }
  ]
}

myChart.setOption(option1)
