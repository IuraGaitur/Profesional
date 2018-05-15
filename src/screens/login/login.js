import React, { Component } from 'react';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { loginRequest, showSecure, emailChange, passChange } from './loginAction';
import LoginView from "./loginView";
import { MAIN } from './../../../App';
import {REGISTER} from "../../../App";

class LoginScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
            email: '',
            password: '',
            emailError: null,
            passError: null,
            showLoading: false,
            networkError: false,
            isLoggedIn: false,
            secure: true,
        };
        this.login = this.login.bind(this);
    }

    async componentDidMount() {
        await Font.loadAsync({
            'georgia': require('../../../assets/fonts/Georgia.ttf'),
            'regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
            'light': require('../../../assets/fonts/Montserrat-Light.ttf'),
            'bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
        if (nextProps.isLoggedIn) {
            this.loginSuccess();
        }
    }

    showError(error) {
        console.log(error);
    }

    login(e) {
        this.props.onLogin(this.state.email, this.state.password);
        e.preventDefault();
    }

    register() {
        this.props.navigation.navigate(REGISTER);
    }

    loginSuccess() {
        this.props.navigation.navigate(MAIN);
    }

    forgotPass() {
        this.props.navigation.navigate('ForgotPass');
    }

    showPass(showPass) {
        this.setState({...this.state, secure: !showPass});
    }

    emailChangeCallback(email) {
        this.setState({...this.state, email: email});
    }

    passChangeCallback(pass) {
        this.setState({...this.state, password: pass});
    }

    dismissDialogCallback() {
        this.setState({...this.state, networkError: false});
    }

    render() {
        const { email, password, emailError, passError, showLoading, secure, networkError } = this.state;
        return <LoginView email={email}
                          password={password}
                          emailError={emailError}
                          passError={passError}
                          showLoading={showLoading}
                          isSecure={secure}
                          registerCallback={this.register.bind(this)}
                          loginCallback={this.login.bind(this)}
                          forgotPassCallback={this.forgotPass.bind(this)}
                          showPassCallback={this.showPass.bind(this)}
                          emailChangeCallback={this.emailChangeCallback.bind(this)}
                          passChangeCallback={this.passChangeCallback.bind(this)}
                          showNetworkError={networkError}
                          dismissCallback={this.dismissDialogCallback.bind(this)}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        emailError: state.login.emailError,
        passError: state.login.passError,
        showLoading: state.login.showLoading,
        networkError: state.login.networkError,
        isLoggedIn: state.login.isLoggedIn,
        user: state.login.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, pass) => { dispatch(loginRequest(email, pass)) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (LoginScreen);