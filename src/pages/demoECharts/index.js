import React from 'react';
import echarts from 'echarts';
import {canvasDom} from "./canvasDom";


export default class DemoECharts extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        let {chartDome} = this;
        let chart = echarts.init(chartDome);
        chart.setOption({
            grid : {
                top : '10%',
                left : 20,
                right : 20,
                bottom : 0,
                containLabel : true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                symbol : 'none',
                type: 'line',
            }]
        });

        this.chartECharts = chart;

        console.log(this.chartECharts);
        console.log(this.chartECharts.getDom().getElementsByTagName('canvas')[0]);

        canvasDom(this.chartECharts.getDom().getElementsByTagName('canvas')[0]);

        //绑定resize
        let self = this;

        this.resizeEvent = function () {
            clearTimeout(self.timer);
            self.timer = setTimeout(function () {
                chart.resize();
            }, 10);
        };
        window.addEventListener("resize", this.resizeEvent);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.resizeEvent);
    }

    render () {
        let sty = {width : '100%', height : '350px'};
        return (
            <div style={sty} ref={(ref)=>{this.chartDome = ref}}/>
        )
    }
}