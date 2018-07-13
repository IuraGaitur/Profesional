import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewDiagnosisView from 'src/screens/home/newDiagnosis/newDiagnosisView';
import {showUsingBlowDryCode, showUsingEnergyCode, goBack} from 'src/screens/home/newDiagnosis/newDiagnosisAction';

class NewDiagnosis extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
    }

    energyCodeDiagnosis = () => {
        let newClient = this.props.newClient;
        this.props.showUsingEnergyCode(newClient);
    };

    blowDryDiagnosis = () => {
        let newClient = this.props.newClient;
        this.props.showUsingBlowDry(newClient);
    };

    actionBack = () => {
        this.props.goBack();
    };

    render() {
        return <NewDiagnosisView
            actionEnergyCode={this.energyCodeDiagnosis}
            actionBack={this.actionBack}
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
        goBack: () => dispatch(goBack())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDiagnosis);