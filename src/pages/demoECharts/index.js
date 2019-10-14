import React from 'react';
import echarts from 'echarts';
import {graphicAnalysis} from "./graphicAnalysis";


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

        // 划线
        chart.setOption({
            graphic : {
                id : 'guides',
                elements : [
                    {type : 'line', left : 10, top : 50, id : 'line', z : 1, shape: {
                            x1: 50,
                            y1: 0,
                            x2: 0,
                            y2: 50,},style:{stroke : '#FF0000', lineWidth : 1}}
                ]
            }
        });

        // 文本
        chart.setOption({
            graphic : {
                id : 'text',
                elements : [
                    {
                        id:'0', type: 'text', z:800, left: '5px', top: '20px',
                        style: {text: '这是一个测试文本', fill: '#000'}
                    }
                ]
            }
        });

        this.chartECharts = chart;

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

    handleChartClick = () => {
        let data = graphicAnalysis(this.chartECharts, {type : 'graphic', typeId : 'cursor'});
        data.elements[0] = {
            type : 'line', left : 80,
            top : 100, id : 'line2', z : 1,
            shape: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 50
            },
            style : {
                stroke : '#FF0000', lineWidth : 1
            }
        };
        this.chartECharts.setOption({
            graphic : data
        });
    };


    componentWillUnmount(){
        window.removeEventListener("resize", this.resizeEvent);
    }

    render () {
        let sty = {width : '100%', height : '350px'};
        return (
            <div>
                <div style={sty} ref={(ref)=>{this.chartDome = ref}}/>
                <div onClick={this.handleChartClick}>
                    Lorem ipsum dolor.
                </div>
            </div>
        )
    }
}