import React, { Component } from 'react';
import { connect } from 'react-redux';
import {registerRequest, goBack, showInfo, init } from './energyCodeDiagnosisAction';
import EnergyCodeDiagnosisView  from './energyCodeDiagnosisView';

class EnergyCodeDiagnosisScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getQuestions();
    }

    goBack = () => {
        this.props.goBack();
    };

    render() {
        const {networkError, showLoading, questions} = this.props;

        return <EnergyCodeDiagnosisView questions={questions}
                                 actionBack={() => this.goBack()}
                                 showNetworkError={networkError}
                                 showLoading={showLoading}
                                 pagesData={questions}
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (EnergyCodeDiagnosisScreen);