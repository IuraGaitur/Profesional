import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerRequest, goBack, showInfo, init} from './blowDryDiagnosisAction';
import BlowDryDiagnosisView  from './blowDryDiagnosisView';

class BlowDryDiagnosisScreen extends Component {

    static navigationOptions = {header: null};

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

        return <BlowDryDiagnosisView questions={questions}
                                  actionBack={() => this.goBack()}
                                  showNetworkError={networkError}
                                  showLoading={showLoading}
                                  pagesData={questions}
                                  dismissDialogCallback={this.dismissDialogCallback}/>
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.blowDry.blowQuestions,
        showLoading: state.blowDry.showLoading,
        errorMessage: state.blowDry.errorMessage,
        networkError: state.blowDry.networkError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: () => {
            dispatch(init())
        },
        goBack: () => {
            dispatch(goBack)
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BlowDryDiagnosisScreen);