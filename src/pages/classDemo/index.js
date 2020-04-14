import React from "react";
import {CompClass} from "../../utils/compClass";
import {getDeleteTodoItem} from '../../store/actionCreators';
//导入 actionCreators 方法
import Store from "../../store";


export default class ClassDemo extends CompClass{
    constructor(props) {
        super(props);
        this.state = {
            dataList : []
        };
        //订阅 Redux 的改变，只要 Redux 发生改变 storeChange方法就会自动执行一次
        Store.subscribe(this.storeChange);
    }

    componentDidMount() {
        let dataList = Store.getState();
        this.setState({
            dataList
        })
    }

    storeChange = () => {
        console.log(Store.getState(), '监听 到更新');
        let dataList = Store.getState();
        this.setState({
            dataList
        })
    };

    render () {
        let {dataList} = this.state;
        return (
            <div>

                <div onClick={() => {
                    //调用 dispatch 并传递参数给 Redux
                    Store.dispatch({
                        type : 'upData',
                        callback : (data) => {
                            data.push('callback 新增');
                            return data;
                        }
                    });
                }}>
                    按钮新增
                </div>
                <div onClick={() => {
                    const action = getDeleteTodoItem(0);
                    //调用 dispatch 并传递参数给 Redux
                    Store.dispatch(action);
                }}>
                    按钮删除
                </div>
                {JSON.stringify(dataList)}
                <Lister/>
            </div>
        )
    }
}


export class Lister extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        //订阅 Redux 的改变，只要 Redux 发生改变 storeChange方法就会自动执行一次
        Store.subscribe(this.storeChangeLister);
    }

    storeChangeLister = () => {
        console.log(Store.getState(), '========')
    };


    render() {
        return (
            <div>
                Lorem ipsum dolor.
            </div>
        );
    }
}
