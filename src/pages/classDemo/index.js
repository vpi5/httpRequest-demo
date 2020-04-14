import React from "react";
import {CompClass} from "../../utils/compClass";
import {Button} from 'antd';
import {getDeleteTodoItem} from '../../components/store/actionCreators';
//导入 actionCreators 方法
import Store from "../../components/store";


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
        let dataList = Store.getState().classDemoList;
        this.setState({
            dataList
        })
    }

    storeChange = () => {
        console.log(Store.getState(), '父组件监听 到更新');
        let dataList = Store.getState().classDemoList;
        this.setState({
            dataList
        })
    };

    render () {
        let {dataList} = this.state;
        return (
            <div>
                <div>父组件：</div>
                <Button onClick={() => {
                    //调用 dispatch 并传递参数给 Redux
                    Store.dispatch({
                        type : 'upDataClassDemoList',
                        callback : (data) => {
                            data.classDemoList.push('callback 新增');
                            return data;
                        }
                    });
                }}>
                    按钮新增
                </Button>
                <br/>
                <br/>
                <Button onClick={() => {
                    /*const action = getDeleteTodoItem(0);
                    //调用 dispatch 并传递参数给 Redux
                    Store.dispatch(action);*/

                    //调用 dispatch 并传递参数给 Redux
                    Store.dispatch({
                        type : 'upDataClassDemoList',
                        callback : (data) => {
                            data.classDemoList.splice(0, 1);
                            return data;
                        }
                    });
                }}>
                    按钮删除
                </Button>
                <br/>
                <br/>
                {JSON.stringify(dataList)}
                <br/>
                <br/>
                <br/>
                <br/>
                <Lister/>
            </div>
        )
    }
}


export class Lister extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataList : []
        };
        //订阅 Redux 的改变，只要 Redux 发生改变 storeChange方法就会自动执行一次
        Store.subscribe(this.storeChangeLister);
    }

    componentDidMount() {
        this.setState({
            dataList : Store.getState().classDemoList
        })
    }

    storeChangeLister = () => {
        console.log(Store.getState(), '子组件监听 到更新======');
        this.setState({
            dataList : Store.getState().classDemoList
        })
    };


    render() {
        let {dataList} = this.state;
        return (
            <div>
                <div>子组件：</div>
                <div>{JSON.stringify(dataList)}</div>
                <br/>
                <Button onClick={() => {
                    //调用 dispatch 并传递参数给 Redux
                    Store.dispatch({
                        type : 'upDataClassDemoList',
                        callback : (data) => {
                            data.classDemoList.push('子组件按钮新增');
                            return data;
                        }
                    });
                }}>
                    子组件按钮新增
                </Button>
            </div>
        );
    }
}
