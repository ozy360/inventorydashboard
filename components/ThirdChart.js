'use client'

import ReactEcharts from "echarts-for-react"

export default function ThirdChart() {
    const option = {
        xAxis:   {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            axisTick: {
              alignWithLabel: true
            }
          }
          ,
        yAxis: {
            type: 'value'
        },

        series: {
            type: 'bar',
            barWidth: '30%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
    };

    return <ReactEcharts option={option} />
}
