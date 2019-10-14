import React from 'react';


export default class DemoCanvas extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        let {canvas, canvasBodyDom} = this;
        let w = canvasBodyDom.clientWidth;
        let h = canvasBodyDom.clientHeight;
        canvas.width = w + '';//注意：没有单位
        canvas.height = h + '';//注意：没有单位
        //设置绘图环境
        let cxt = canvas.getContext('2d');
        //开启新路近
        cxt.beginPath();
        // 设置笔触的宽度
        cxt.lineWidth = 2;
        //设置笔触的颜色
        cxt.strokeStyle = "#FF0000";
        //设定笔触的位置 ==> 参数详解（左边距，上边距[与 lineTo 第二个参数相同]）
        cxt.moveTo(0,30);
        //设置移动的位置 ==> 参数详解（左边距，上边距[与 moveTo 第二个参数相同]）
        cxt.lineTo(w,30);
        //画线
        cxt.stroke();//这个时候的线已经出来了
        //关闭路径
        cxt.closePath();
        //凡事路径图形必须先开始路径,画完之后必须结束路径
    }

    render () {
        let sty = {width : '100%', height : '350px', background : '#ccc'};
        return (
            <div ref={ dom => this.canvasBodyDom = dom } style={sty}>
                <canvas ref={ dom => this.canvas = dom }/>
            </div>
        )
    }
}