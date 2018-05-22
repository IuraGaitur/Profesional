import React, {Component}  from 'react';
import {View, Image, Dimensions, AppRegistry} from 'react-native';
import {LoginScreen} from './src/screens/login';
import {ProfileScreen} from './src/screens/profile';
import {MainScreen} from './src/screens/main';
import {RegisterScreen} from './src/screens/register';
import {SplashScreen} from './src/screens/splash';
import {RecoveryScreen} from './src/screens/recovery';
import {InfoScreen} from './src/screens/info';
import {createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import store from './src/app/store'
import {Router, Scene} from "react-native-router-flux";
import ScreenUtils from "./src/utils/ScreenUtils";

export const SPLASH = 'splash';
export const LOGIN = 'login';
export const REGISTER = 'register';
export const PROFILE = 'profile';
export const FORGOT_PASS = 'forgotPass';
export const INFO = 'info';
export const MAIN = 'main';


class App extends Component {
    async componentWillMount() {
        await ScreenUtils.calcHeight();
    }

    render() {
        return (
            <Router hideNavBar="true">
                <Scene key="root">
                    <Scene key={SPLASH} component={SplashScreen}  initial={true}/>
                    <Scene key={LOGIN} component={LoginScreen}/>
                    <Scene key={REGISTER} component={RegisterScreen}/>
                    <Scene key={PROFILE} component={ProfileScreen}/>
                    <Scene key={MAIN} component={MainScreen}/>
                    <Scene key={FORGOT_PASS} component={RecoveryScreen}/>
                    <Scene key={INFO} component={InfoScreen}/>
                </Scene>
            </Router>
        );
    }
}

export default class AppContainer extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

