import React, { Component } from 'react';
import { connect } from 'react-redux';
import {registerRequest, goBack, showInfo, init } from './detailsFormAction';
import DetailsFormView  from './detailsFormView';
import Toast, {DURATION} from 'react-native-easy-toast'
import {View} from "react-native";

class DetailsFormScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getQuestions();
    }

    goBack = () => { this.props.goBack(); };

    showError = (errorMessage) => { this.refs.errorToast.show(errorMessage); };

    dismissDialogCallback = () => { this.setState({...this.state, networkError: false});};




    render() {
        const {networkError, showLoading, questions} = this.props;

        return (
            <View>
                <DetailsFormView questions={questions}
                                 actionBack={() => this.goBack()}
                                 showNetworkError={networkError}
                                 showLoading={showLoading}
                                 pagesData={questions}
                                 dismissDialogCallback={this.dismissDialogCallback}/>
                <Toast ref="errorToast"/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.clientDetails.questions,
        showLoading: state.clientDetails.showLoading,
        errorMessage: state.clientDetails.errorMessage,
        networkError: state.clientDetails.networkError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: () => {dispatch(init())},
        goBack: () => {dispatch(goBack)},
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (DetailsFormScreen);