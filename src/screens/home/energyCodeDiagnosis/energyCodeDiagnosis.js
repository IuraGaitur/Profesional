import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBack, init, showTreatment} from 'src/screens/home/energyCodeDiagnosis/energyCodeDiagnosisAction';
import EnergyCodeDiagnosisView  from 'src/screens/home/energyCodeDiagnosis/energyCodeDiagnosisView';
import Diagnosis from 'src/data/models/diagnosis/diagnosis';

class EnergyCodeDiagnosisScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = {showSaveAction: false, diagnosis: new Diagnosis()};
    }

    componentDidMount() {
        this.props.getDiagnosis();
    }

    goBack = () => {
        this.props.goBack();
    };

    actionPageSelected = (position, totalPages) => {
        let showEditAction = position == totalPages - 1;
        this.setState({showSaveAction: showEditAction});
    };

    actionSave = () => {
        let newClient = this.props.newClient;
        this.props.showTreatment(newClient);
    };

    render() {
        const {networkError, showLoading, diagnosisQuiz} = this.props;
        const {showSaveAction, diagnosis} = this.state;

        return <EnergyCodeDiagnosisView diagnosis={diagnosis}
                                        actionBack={() => this.goBack()}
                                        actionSave={this.actionSave}
                                        actionPageSelectedCallback={this.actionPageSelected}
                                        dismissDialogCallback={this.dismissDialogCallback}
                                        showSaveAction={showSaveAction}
                                        showNetworkError={networkError}
                                        showLoading={showLoading}
                                        quiz={diagnosisQuiz}/>
    }
}

const mapStateToProps = (state) => {
    return {
        diagnosisQuiz: state.energyCode.diagnosisQuiz
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goBack: () => {dispatch(goBack)},
        getDiagnosis: () => {dispatch(init())},
        showTreatment: (newClient) => {dispatch(showTreatment(newClient))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EnergyCodeDiagnosisScreen);