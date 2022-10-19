// JS
var chartDivAnglais = JSC.chart('chartDivAnglais', {
    debug: false,
    legend_visible: false,
    animation_duration: 1000,
    defaultTooltip_enabled: false,
    xAxis_spacingPercentage: 0.4,
    yAxis: [
        {
            id: 'ax1',
            defaultTick: {
                padding: 10,
                enabled: false
            },
            customTicks: [{label_text:'-',value:0}, {label_text:'A1',value:6}, {label_text:'A2',value:8}, {label_text:'B1',value:10}, {label_text:'B2',value:14}, {label_text:'C1',value:18}, {label_text:'C2',value:20}],
            line: {
                width: 10,

                /*Defining the option will enable it.*/
                breaks: {},

                /*Palette is defined at series level with an ID referenced here.*/
                color: 'smartPalette'
            },
            scale_range: [0, 20]
        },
    ],
    defaultSeries: {
        type: 'gauge column roundcaps',
    },
    series: [
        {
            type: 'column roundcaps',
            name: 'Temperatures',
            yAxis: 'ax1',
            palette: {
                id: 'pal1',
                pointValue: '{%yValue/20}',
                colors: ['#FF5353','#ff9721','#FFD221', '#21D683', '#137e4c', '#095228', '#095228'],
                points: [{ id: '1', x: 'speed', y: '%yValue' }],
                ranges: [
                    { value: 0, color: '#FF5353' },
                    { value: 6, color: '#ff9721' },
                    { value: 8, color: '#FFD221' },
                    { value: 10, color: '#21D683' },
                    { value: 14, color: '#137e4c' },
                    { value: 18, color: '#095228' },
                    { value: 20, color: '#095228' }
                ]
            },
            points: [['x', [0, 12], 'speed', '%yValue']]
        },
    ]
});

// JS
var chartDivEspagnol = JSC.chart('chartDivEspagnol', {
    debug: false,
    legend_visible: false,
    animation_duration: 1000,
    defaultTooltip_enabled: false,
    xAxis_spacingPercentage: 0.4,
    yAxis: [
        {
            id: 'ax1',
            defaultTick: {
                padding: 10,
                enabled: false
            },
            customTicks: [{label_text:'-',value:0}, {label_text:'A1',value:6}, {label_text:'A2',value:8}, {label_text:'B1',value:10}, {label_text:'B2',value:14}, {label_text:'C1',value:18}, {label_text:'C2',value:20}],
            line: {
                width: 10,

                /*Defining the option will enable it.*/
                breaks: {},

                /*Palette is defined at series level with an ID referenced here.*/
                color: 'smartPalette'
            },
            scale_range: [0, 20]
        },
    ],
    defaultSeries: {
        type: 'gauge column roundcaps',
    },
    series: [
        {
            type: 'column roundcaps',
            name: 'Temperatures',
            yAxis: 'ax1',
            palette: {
                id: 'pal1',
                pointValue: '{%yValue/20}',
                colors: ['#FF5353','#ff9721','#FFD221', '#21D683', '#137e4c', '#095228', '#095228'],
                points: [{ id: '1', x: 'speed', y: '%yValue' }],
                ranges: [
                    { value: 0, color: '#FF5353' },
                    { value: 6, color: '#ff9721' },
                    { value: 8, color: '#FFD221' },
                    { value: 10, color: '#21D683' },
                    { value: 14, color: '#137e4c' },
                    { value: 18, color: '#095228' },
                    { value: 20, color: '#095228' }
                ]
            },
            points: [['x', [0, 14], 'speed', '%yValue']]
        },
    ]
});

