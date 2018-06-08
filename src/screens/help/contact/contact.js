import React, { Component } from 'react';
import { connect } from 'react-redux';
import {registerRequest, goBack, showInfo, init } from './contactAction';
import ContactView  from './contactView';
import Toast, {DURATION} from 'react-native-easy-toast'
import {View} from "react-native";

class ContactScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    componentDidMount() {
        this.props.getCountries();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
        if (nextProps.errorMessage) {
            this.showError(nextProps.errorMessage);
        }
    }

    registerUser = (user) => { this.props.register(user);};

    goBack = () => { this.props.goBack(); };

    showInfo = () => { this.props.showInfo(); };

    showError = (errorMessage) => { this.refs.errorToast.show(errorMessage); };

    dismissDialogCallback = () => { this.setState({...this.state, networkError: false});};

    render() {
        const {countries, networkError, showLoading} = this.props;

        return (
                <ContactView registerCallback={user => this.registerUser(user)}
                              countries={countries}
                              actionBack={() => this.goBack()}
                              actionInfo={() => this.showInfo()}
                              showNetworkError={networkError}
                              showLoading={showLoading}
                              dismissDialogCallback={this.dismissDialogCallback}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.register.countries,
        showLoading: state.register.showLoading,
        errorMessage: state.register.errorMessage,
        networkError: state.register.networkError,
        user: state.register.user,
        isLoggedIn: state.register.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => {dispatch(init())},
        register: (user) => {dispatch(registerRequest(user))},
        goBack: () => {dispatch(goBack)},
        showInfo: () => {dispatch(showInfo)},
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ContactScreen);