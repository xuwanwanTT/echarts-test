import echarts from 'echarts'

let symbolSize = 20

let data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]]

let myChart = echarts.init(document.querySelector('.test'))

myChart.setOption({
  title: {
    text: '拖拽'
  },
  tooltip: {
    triggerOn: 'none',  //不使用默认的提示规则
    formatter: function (params) {
      return `X: ${params.data[0].toFixed(2)} <br>Y: ${params.data[1].toFixed(2)}`;
    }
  },
  xAxis: {
    min: -100,
    max: 80,
    type: 'value',
    axisLine: {onZero: false}
  },
  yAxis: {
    min: -30,
    max: 60,
    type: 'value',
    axisLine: {onZero: false}
  },
  series: [
    {
      id: 'a',
      type: 'line',
      smooth: true,
      symbolSize: symbolSize,
      data: data
    }
  ]
})

myChart.setOption({
  //获取原来的点，生成不可见的可拖拽的新的点
  graphic: data.map((dataItem,dataIndex)=>{
    return {
      type: 'circle',
      shape: {
        r: symbolSize  //半径
      },
      position: myChart.convertToPixel('grid',dataItem),
      invisible: true,  //不可见，但可操作
      draggable: true,  //可拖拽
      z: 3, //数值写大，表示最上层
      ondrag: echarts.util.curry(onPointDragging, dataIndex),  //绑定事件
      onmousemove: echarts.util.curry(showTooltip, dataIndex),
      onmouseout: echarts.util.curry(hideTooltip, dataIndex)
    }
  })
})

//获取拖拽后的位置，修改对应 data 的值
function onPointDragging(dataIndex) {
  data[dataIndex] = myChart.convertFromPixel('grid', this.position)
  myChart.setOption({
    series: [{
      id: 'a',
      data: data
    }]
  })
}

//响应式布局
window.addEventListener('resize', function () {
  myChart.setOption({
    graphic: data.map((item,dataIndex)=> {
      return {
        position: myChart.convertToPixel('grid', item)
      }
    })
  })
})

function showTooltip(dataIndex) {
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: dataIndex
  });
}

function hideTooltip(dataIndex) {
  myChart.dispatchAction({
    type: 'hideTip'
  });
}
