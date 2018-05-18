import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkForPrimaryUser } from './splashAction';
import SplashView  from './splashView';
import { LOGIN, MAIN } from './../../../App';

class SplashScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        this.props.checkLoggedInUser();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checkedForUser) {
            this.showLoginScreen();
            if (nextProps.user) {
                //this.showMainScreen();
            } else {
                //this.showLoginScreen();
            }
        }
    }

    static getDeriverdState(prevState, nextState) {

    }

    showMainScreen = () => { this.props.navigation.navigate(MAIN); };

    showLoginScreen = () => { this.props.navigation.navigate(LOGIN); };

    render() {
        const {} = this.state;
        return (
            <SplashView />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        checkedForUser: state.splash.checkedForUser,
        primaryUser: state.splash.primaryUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkLoggedInUser: () => {dispatch(checkForPrimaryUser())}
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (SplashScreen);