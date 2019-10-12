import React from 'react';
import {LayoutApp} from "../../components/layout";

export default class DemoAlert extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isShow : false,
            alertData : {
                type : 'init',
                message : '这是一个 init 类型的弹框',
                alertChange : this.handleAlertChange
            }
        };
    }

    handleAlertChange = (data) => {
        this.setState({
            isShow : false
        })
    };

    render() {
        let {isShow, alertData} = this.state;
        return (
            <LayoutApp
                isAlert={isShow}
                alertData={alertData}
            >
                <div onClick={()=> {this.setState({ isShow : true})}}>Lorem ipsum dolor.111111111111111111</div>
            </LayoutApp>
        );
    }
}