import React, { Component } from 'react';
import { connect } from 'react-redux';
import {registerRequest, goBack, showInfo, init, showTreatment } from './energyCodeDiagnosisAction';
import EnergyCodeDiagnosisView  from './energyCodeDiagnosisView';

class EnergyCodeDiagnosisScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = {showSaveAction: false};
    }

    componentDidMount() {
        this.props.getQuestions();
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
        const {networkError, showLoading, questions} = this.props;
        const {showSaveAction} = this.state;

        return <EnergyCodeDiagnosisView
                                 actionBack={() => this.goBack()}
                                 showNetworkError={networkError}
                                 showSaveAction={showSaveAction}
                                 showLoading={showLoading}
                                 actionPageSelectedCallback={this.actionPageSelected}
                                 pagesData={questions}
                                 actionSave={this.actionSave}
                                 dismissDialogCallback={this.dismissDialogCallback}/>
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.energyCode.questions,
        showLoading: state.energyCode.showLoading,
        errorMessage: state.energyCode.errorMessage,
        networkError: state.energyCode.networkError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: () => {dispatch(init())},
        goBack: () => {dispatch(goBack)},
        showTreatment: (newClient) => {dispatch(showTreatment(newClient))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (EnergyCodeDiagnosisScreen);