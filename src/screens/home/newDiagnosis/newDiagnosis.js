import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewDiagnosisView from "./newDiagnosisView";
import {showUsingBlowDryCode, showUsingEnergyCode} from "./newDiagnosisAction";

class NewDiagnosis extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
    }

    energyCodeDiagnosis = () => {
        console.log(newClient);
        let newClient = this.props.newClient;
        this.props.showUsingEnergyCode(newClient);
    };

    blowDryDiagnosis = () => {
        let newClient = this.props.newClient;
        this.props.showUsingBlowDry(newClient);
    };

    render() {
        return <NewDiagnosisView
            actionEnergyCode={this.energyCodeDiagnosis}
            actionBlowDry={this.blowDryDiagnosis}/>
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        showUsingEnergyCode: (newClient) => dispatch(showUsingEnergyCode(newClient)),
        showUsingBlowDry: (newClient) => dispatch(showUsingBlowDryCode(newClient)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDiagnosis);