import React, { Component } from 'react';
import { connect } from 'react-redux';
import SplashView  from 'src/screens/splash/splashView';
import ScreenUtils from 'src/utils/ScreenUtils';
import { checkForPrimaryUser } from 'src/screens/splash/splashAction';

class SplashScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        await ScreenUtils.calcHeight();
        this.props.checkLoggedInUser();
    }

    render() {
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