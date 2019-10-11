import React from 'react';
import popUpAlert from "../../utils/alertModule/popUpAlert";

export default class DemoAlert extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    open = () => {
        let data = {
            name : '张三',
            age : '18'
        };
        popUpAlert.open({
            alertTip : data,
            closeAlert : function(data){
                console.log("关闭了...", data);
            }
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.open}>
                    开启宝藏
                </button>
            </div>
        );
    }
}