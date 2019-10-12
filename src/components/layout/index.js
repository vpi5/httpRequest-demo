import React from 'react';
import * as styles from './style.less';
import {AlertModuleType} from "./alertModuleType";


export class LayoutApp extends AlertModuleType{
    constructor(props){
        super(props);
        this.state = {
            show : false
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isAlert !== this.state.show){
            this.setState({
                show : nextProps.isAlert
            })
        }
    }

    render () {
        let {show} = this.state;
        return (
            <div className={styles.layoutAPp}>
                <div className={styles.layoutAPPTop}>
                    title
                </div>
                <div className={styles.layoutAPpLeft}>
                    list
                </div>
                <div className={styles.layoutAPPContent}>
                    {this.props.children}
                </div>
                {
                    show && (
                        this.handleShowAlert()
                    )
                }
            </div>
        )
    }
}