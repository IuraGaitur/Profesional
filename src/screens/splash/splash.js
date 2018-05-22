import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkForPrimaryUser } from './splashAction';
import SplashView  from './splashView';
import ScreenUtils from "../../utils/ScreenUtils";

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

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
    }

    static getDerivedState(prevState, nextState) {
        console.log(prevState);
        console.log(nextState);
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