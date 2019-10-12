import React from 'react';
import * as styles from './popUpAlert.less';


export class LayoutAlert extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className={`${styles.PopUpAlert}`}>
                <div className={`${styles.alertBody} fadeInDown animated`}>
                    <div className={`${styles.PopUpAlert_content}`}>
                        <div className={styles.PopUpAlert_content_top}>{'温馨提示！'}</div>
                        <div className={styles.PopUpAlert_content_center}>{'当前是 Alert 提示信息'}</div>
                        <div onClick={()=> {this.props.alertChange('OK')}} className={styles.PopUpAlert_content_bottom}>{'确定'}</div>
                    </div>
                </div>
            </div>
        );
    }
}