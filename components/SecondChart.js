'use client'

import ReactEcharts from "echarts-for-react"

export default function SecondChart() {
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
            type: 'line',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
    };

    return <ReactEcharts option={option} />
}
