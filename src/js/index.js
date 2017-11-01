import '../index.css'
import $ from 'jquery'
import echarts from 'echarts'
import './drag'
import './calendar'
import './demo'

let test1 = echarts.init(document.querySelector('.test1'))

let option = {
  title: {
    text: 'ECharts'
  },
  tooltip: {},
  legend: {
    data:['销量']
  },
  xAxis: {
    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
}

test1.setOption(option)

let test2 = echarts.init(document.querySelector('.test2'))

test2.setOption({
  backgroundColor: '#f1f1f1', //全局背景设置
  textStyle: {
    color: 'rgba(0, 0, 0, 0.8)'
  },  //全局字体设置
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      roseType: 'angle',  //设置为南丁格尔图
      itermStyle: {
        normal: {
          shadowBlur:200,
          shadowOffsetX:0,
          shadowOffsetY:0,
          shadowColor: 'rgba(0,0,0,.5)'
        },
        emphasis: {
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      itemStyle: {
        normal: {
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      data:[
        {value:235, name:'视频广告',itemStyle: {normal:{color: 'red'}}},
        {value:274, name:'联盟广告',itemStyle: {normal:{color: 'yellow'}}},
        {value:310, name:'邮件营销',itemStyle: {normal:{color: 'blue'}}},
        {value:335, name:'直接访问',itemStyle: {normal:{color: 'pink'}}},
        {value:400, name:'搜索引擎',itemStyle: {normal:{color: 'green'}}}
      ]
    }
  ]
})

let test3 = echarts.init(document.querySelector('.test3'))

test3.setOption({
  title: {
    text: '异步数据loading'
  },
  tooltip: {},
  legend: {
    data:['销量']
  },
  xAxis: {
    data: []
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: []
  }]
})
test3.showLoading()
setTimeout(function(){
  $.get('../data.json').done(function(data){
    test3.hideLoading()
    test3.setOption({
      xAxis: {
        data: data.categories
      },
      series: [{
        name: '销量',
        data: data.data
      }]
    })
  })
},5000)

let test4 = echarts.init(document.querySelector('.test4'))

let option4 = {
  title: {
    text: '交互鼠标拖动和滚轮'
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'value'
  },
  dataZoom: [
    // {   // 这个dataZoom组件，默认控制x轴。
    //   type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
    //   start: 10,      // 左边在 10% 的位置。
    //   end: 60         // 右边在 60% 的位置。
    // },
    // {   // 这个dataZoom组件，也控制x轴，实现滚轮滚动
    //   type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
    //   start: 10,      // 左边在 10% 的位置。
    //   end: 60         // 右边在 60% 的位置。
    // },
    {
      type: 'slider',
      xAxisIndex: 0,
      start: 10,
      end: 60
    },
    {
      type: 'inside',
      xAxisIndex: 0,
      start: 10,
      end: 60
    },
    {
      type: 'slider',
      yAxisIndex: 0,
      start: 30,
      end: 80
    },
    {
      type: 'inside',
      yAxisIndex: 0,
      start: 30,
      end: 80
    }
  ],
  series: [
    {
      type: 'scatter', // 这是个『散点图』
      itemStyle: {
        normal: {
          opacity: 0.8
        }
      },
      symbolSize: function (val) {
        return val[2] * 40;
      },  //设置散点的大小，data中每个数组依次表示X轴、Y轴、大小
      data: [["14.616","7.241","0.896"],["3.958","5.701","0.955"],["2.768","8.971","0.669"],["9.051","9.710","0.171"],["14.046","4.182","0.536"],["12.295","1.429","0.962"],["4.417","8.167","0.113"],["0.492","4.771","0.785"],["7.632","2.605","0.645"],["14.242","5.042","0.368"]]
    }
  ]
}

test4.setOption(option4)

