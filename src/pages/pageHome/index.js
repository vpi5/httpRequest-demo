import React from 'react';
import * as styles from './style.less';
import ajax from '../../utils/ajax';
import axiosHttp from '../../utils/axios';


export default class PageHome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : ''
        };
    }

    componentDidMount(){
        let urlData = {};
        urlData.command = 'tradeGame.yinheisjoingameaction';
        urlData.token = '12459901a6db5c2da9e7f325f5a1d93934d25f3563ceb88acbd1c7daf361eac2afe6b2fbb4d2eb532c0041192d9a8beacc7bff249f13cb370957d9d5e029fd8535e8ba5f27f3e3291fdf26f49c977b06add78418c439b58864513d7adf000f8a96e9f38a738f2c81b94646006014f7971d2e1d8bda5a7e6184fdfb9e2857ce3cda9a6ecc9202c395872d362a802d988aca5a4190c079d754a32fae6a327400095cf53cc18bb233c935013476f3959c596e4550b9e0518989831f2ee4076592e64f81a141957e986ffdd264793f549e39a2ae7b0a81e2ec82ec360729bcae321c';
        urlData.companyId = 3;
        urlData.sourceId = 2;

        /*ajax.POST('', urlData, (res) => {
            this.setState({
                data : res
            })
        })*/

        axiosHttp.POST('', urlData, (res) => {
            this.setState({
                data : res
            });
        });

        this.homeRef.style.cssText = 'color:red;height:50px;background:#CCC;'
    }

    render (){
        let {data} = this.state;
        console.log(data, '=======');
        return (
            <div ref={(ref) => {this.homeRef = ref}}>
                Lorem ipsum dolor.
            </div>
        )
    }
}