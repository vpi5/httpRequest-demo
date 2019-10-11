import React from 'react';


export class CompClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'YY11002' : {name : '11', age : '18'}
        };
    }

    handleClickClass = () => {
        alert('class')
    };

    componentDidMount(){
        this.setState({
            'YY11002' : {name : 'QQ', age : '@@'}
        })
    }
}