import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerRequest, goBack, showInfo, init, createTreatment} from './blowDryDiagnosisAction';
import BlowDryDiagnosisView  from './blowDryDiagnosisView';

class BlowDryDiagnosisScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = {showEditAction: false};
    }

    componentDidMount() {
        this.props.getQuestions();
    }

    goBack = () => {
        this.props.goBack();
    };

    createTreatment = () => {
        let newClient = this.props.newClient;
        this.props.createTreatment(newClient);
    };

    actionPageSelected = (position, totalPages) => {
        let showEditAction = position == totalPages - 1;
        this.setState({showEditAction: showEditAction});
    };

    render() {
        const {networkError, showLoading, questions} = this.props;
        const {showEditAction} = this.state;

        return <BlowDryDiagnosisView questions={questions}
                                     showNetworkError={networkError}
                                     showLoading={showLoading}
                                     pagesData={questions}
                                     showEditAction={showEditAction}
                                     actionCreate={this.createTreatment}
                                     actionPageSelectedCallback={this.actionPageSelected}
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
        createTreatment: (newClient) => {
            dispatch(createTreatment(newClient));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BlowDryDiagnosisScreen);