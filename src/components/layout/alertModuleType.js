import React from 'react';
import {LayoutAlert} from "../../utils/alertModule/layoutAlert";


export class AlertModuleType extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    handleShowAlert = () => {
        let _ = this;
        let {alertData} = _.props;
        switch (alertData.type) {
            case 'init' :
                return <LayoutAlert
                    {..._.props.alertData}
                />;
            case 'default' :
                return '123';
            default :
                return 'default';
        }
    };
}