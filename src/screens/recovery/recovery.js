import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecoveryView  from './recoveryView';
import {INFO} from "../../../App";
import {resetPassword} from "./recoveryAction";

class RecoveryScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {}

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
        if (nextProps.successMessage) {
            this.showResetSuccess(nextProps.successMessage);
        } else if(nextProps.errorMessage) {
            this.showError(nextProps.errorMessage);
        }
    }

    showResetSuccess = (message) => {
        this.refs.recoverView.showToast(message);
    };

    showError = (message) => {
        this.refs.recoverView.showToast(message);
    };

    actionInfo = () => { this.props.navigation.navigate(INFO);};

    actionReset = (email, newPassword) => {this.props.resetPass(email, newPassword);};

    actionBack = () => {this.props.navigation.goBack(null);};

    dismissDialogCallback = () => { this.setState({...this.state, networkError: false});};


    render() {
        const {showLoading} = this.state;

        return (
            <RecoveryView ref="recoverView"
                          actionInfoCallback={this.actionInfo}
                          showLoading={showLoading}
                          actionBackCallback={this.actionBack}
                          actionResetCallback={this.actionReset}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showLoading: state.recover.showLoading,
        successMessage: state.recover.successMessage,
        errorMessage: state.recover.errorMessage,
        message: state.recover.message
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetPass: (email, newPass) => dispatch(resetPassword(email, newPass))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (RecoveryScreen);