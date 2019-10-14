/*
*
*   时间 ：2019-10-14
*
*   ECharts 版本 ：4.2.1
*
*   解析 ECharts option 中相关配置信息 并返回订阅的键值(key)
*
*   传递参数说明  ： (绑定 ECharts 的图形元素， 获取的相关配置项 key {type ==> {type : 查询的 key typeId : 查询的Key 中的子项} })
*
*   出参说明 ： 返回当前 图表 中的 ==> 数组 list 的格式  特殊的格式 ：{graphic 除外 ==> 包含当前自定义 id 和 数组list}
*
*/

export let graphicAnalysis = function (chart, key) {
    if (typeof chart.id !== "string"){
        console.warn('获取ECharts option配置项时抛出异常：', '当前传入 ECharts 元素不正确！');
        return;
    }
    switch (key.type) {
        case 'graphic' :
            if(typeof key.typeId === 'undefined'){
                console.warn('获取ECharts option配置项时抛出异常：', '传入键值缺少查询参数');
                return {elements : {}};
            }
            let keyData = chart.getOption()[key.type];
            for (let i = 0; i < keyData.length; i++) {
                if(keyData[i].id === key.typeId){
                    return keyData[i];
                }
            }
            console.warn('获取ECharts option配置项时抛出异常：', '所要查询的 key 键值匹配失败！系统方法默认返回对应 空 对象');
            return {elements : {}};
        default :
            let data = chart.getOption()[key.type];
            if(typeof data === 'undefined'){
                console.warn('获取ECharts option配置项时抛出异常：', '所要查询的 key 键值未定义');
                return []
            }
            return data;
    }
};