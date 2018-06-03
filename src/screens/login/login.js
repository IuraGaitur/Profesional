import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest, register, forgotPass, getInfo } from './loginAction';
import LoginView from "./loginView";

class LoginScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    showError(error) {
        console.log(error);
    }

    login(email, pass) {
        this.props.onLogin(email, pass);
    }

    register() {
        this.props.onRegister();
    }

    forgotPassScreen() {
        this.props.onForgotPass();
    }

    showInfoScreen() {
        this.props.onInfo();
    }

    dismissDialogCallback() {
        this.setState({...this.state, networkError: false});
    }

    render() {
        const { passError, showLoading, networkError } = this.props;
        return <LoginView passError={passError}
                          showLoading={showLoading}
                          registerCallback={this.register.bind(this)}
                          loginCallback={this.login.bind(this)}
                          forgotPassCallback={this.forgotPassScreen.bind(this)}
                          showInfoCallback={this.showInfoScreen.bind(this)}
                          showNetworkError={networkError}
                          dismissCallback={this.dismissDialogCallback.bind(this)}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        passError: state.login.passError,
        showLoading: state.login.showLoading,
        networkError: state.login.networkError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, pass) => { dispatch(loginRequest(email, pass)) },
        onRegister: () => {dispatch(register())},
        onForgotPass: () => {dispatch(forgotPass)},
        onInfo: () => {dispatch(getInfo())}
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (LoginScreen);