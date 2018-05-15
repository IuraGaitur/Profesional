import React, { Component } from 'react';
import { connect } from 'react-redux';
import { init, registerRequest } from './registerAction';
import RegisterView  from './registerView';

class RegisterScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
    }

    async componentDidMount() {
        this.getCountries();
    }

    getCountries = () => {
        this.props.getCountries();
    };

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
    }

    registerUser = (user) => {

    };

    goBack = () => {
      this.props.navigation.goBack(null);
    };

    showInfo = () => {

    };

    render() {
        const {countries} = this.state;

        return (
            <RegisterView registerCallback={user => this.registerUser(user)} countries={countries}
                          actionBack={() => this.goBack()} actionInfo={() => this.showInfo()} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.register.countries,
        showLoading: state.register.showLoading,
        errorType: state.register.errorType,
        errorMessage: state.register.errorMessage,
        user: state.register.user,
        isLoggedIn: state.register.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => {dispatch(init())},
        register: (user) => {dispatch(registerRequest(user))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (RegisterScreen);