

export function canvasDom (canvas) {
    let w = canvas.clientWidth;
    let h = canvas.clientHeight;
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