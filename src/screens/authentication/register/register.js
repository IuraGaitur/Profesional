import moment from "moment";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import User from 'src/data/models/user';
import {init, registerRequest, showInfo, showPrivacyInfo, showCookieInfo} from 'src/screens/authentication/register/registerAction';
import RegisterView  from 'src/screens/authentication/register/registerView';

class RegisterScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = {...this.props, currentUser: new User()};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
        if (nextProps.errorMessage) {
            this.showError(nextProps.errorMessage);
        }
    }

    changeUser = (item, value) => {
        let user = this.state.currentUser;
        user[item] = value;
        this.setState({currentUser: user});
    };

    registerUser = (user) => {
        this.props.register(user);
    };

    showInfo = () => {
        this.props.showInfo();
    };

    showError = (errorMessage) => {
        this.refs.errorToast.show(errorMessage);
    };

    dismissDialogCallback = () => {
        this.setState({...this.state, networkError: false});
    };

    actionFindAboutCookie = () => {
        this.props.showCookieInfo();
    };

    actionFindAboutPrivacy = () => {
        this.props.showPrivacyInfo();
    };

    showDatePicker = () => {
        this.setState({showDatePicker: true});
    };

    handleDatePicked = (time) => {
        this.changeUser('birthday', moment(time).format('YYYY-MM-DD'));
        this.setState({showDatePicker: false});
    };

    hideDatePicker = () => {
        this.setState({showDatePicker: false});
    };

    render() {
        const {currentUser, showDatePicker} = this.state;
        const {countries, networkError, showLoading} = this.props;

        return (
            <RegisterView user={currentUser}
                          actionRegisterUser={this.registerUser}
                          countries={countries}
                          actionInfo={() => this.showInfo()}
                          showNetworkError={networkError}
                          showLoading={showLoading}
                          actionChangeUser={this.changeUser}
                          showDatePicker={showDatePicker}
                          actionHideDateTimePicker={this.hideDatePicker}
                          actionHandleDatePicked={this.handleDatePicked}
                          actionShowDatePicker={this.showDatePicker}
                          actionFindAboutPrivacy={this.actionFindAboutPrivacy}
                          actionFindAboutCookie={this.actionFindAboutCookie}
                          dismissDialogCallback={this.dismissDialogCallback}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.splash.countries,

        showLoading: state.register.showLoading,
        errorMessage: state.register.errorMessage,
        networkError: state.register.networkError,
        user: state.register.user,
        isLoggedIn: state.register.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (user) => {dispatch(registerRequest(user))},
        showInfo: () => {dispatch(showInfo)},
        showPrivacyInfo: () => {dispatch(showPrivacyInfo())},
        showCookieInfo: () => {dispatch(showCookieInfo())}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);