'use client'

import ReactEcharts from "echarts-for-react"

export default function FirstChart() {
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

        series: [{
            type: 'line',
            smooth: true,
            data: [10, 52, 200, 334, 390, 330, 220]
            },
            {
                type: 'line',
                smooth: true,
                data: [19, 90, 200, 734, 300, 530, 420]
            },

        ]
    };

    return <ReactEcharts option={option} />
}
