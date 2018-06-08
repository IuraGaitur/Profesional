import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewDiagnosisView from "./newDiagnosisView";
import {showUsingBlowDryCode, showUsingEnergyCode} from "./newDiagnosisAction";

class NewDiagnosis extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
    }

    render() {
        return <NewDiagnosisView
                    actionEnergyCode={this.props.showUsingEnergyCode}
                    actionBlowDry={this.props.showUsingBlowDry} />
    }
}

const mapStateToProps = (state) => { return {};};

const mapDispatchToProps = (dispatch) => {
    return {
        showUsingEnergyCode: () => dispatch(showUsingEnergyCode()),
        showUsingBlowDry: () => dispatch(showUsingBlowDryCode()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDiagnosis);