import React from 'react';
import ReactDOM from 'react-dom';
import * as styles from './popUpAlert.less';


class PopUpAlert extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            alertStatus : false,
            alertTip : {},
            closeAlert : function () {}
        };
    }

    // 关闭弹框的方法
    confirm = () => {
        let {alertTip} = this.state;
        this.setState({
            alertStatus:false
        });
        this.state.closeAlert(alertTip);
    };

    // 打开弹框的方法
    open =(options)=>{
        options = options || {};
        options.alertStatus = true;
        this.setState({
            closeAlert : function () {},
            ...options
        })
    };

    render(){
        let {alertStatus, alertTip} = this.state;
        console.log(this.state);
        return (
            alertStatus ?
                <div className={`${styles.PopUpAlert}`} style={{display : alertStatus ? 'block' : 'none'}}>
                    <div className={`${styles.alertBody} fadeInDown animated`}>
                        <div className={`${styles.PopUpAlert_content}`}>
                            <div className={styles.PopUpAlert_content_top}>{'温馨提示！'}</div>
                            <div className={styles.PopUpAlert_content_center}>{alertTip.name}</div>
                            <div onClick={this.confirm} className={styles.PopUpAlert_content_bottom}>{'确定'}</div>
                        </div>
                    </div>
                </div>
                :
                ''
        );
    }
}

let div = document.createElement('div');

document.body.appendChild(div);

div.setAttribute('id', 'PopUpAlert');

let Box = ReactDOM.render(React.createElement(
    PopUpAlert
),div);

export default Box;