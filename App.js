import React, {Component}  from 'react';
import {LoginScreen} from './src/screens/authentication/login';
import {ProfileScreen} from './src/screens/profile';
import {RegisterScreen} from './src/screens/authentication/register';
import {SplashScreen} from './src/screens/splash';
import {RecoveryScreen} from './src/screens/authentication/recovery';
import {Router, Scene} from "react-native-router-flux";
import {Provider} from 'react-redux';
import store from './src/app/store';
import {Root} from 'native-base'

export const SPLASH = 'splash';
export const LOGIN = 'login';
export const REGISTER = 'register';
export const PROFILE = 'profile';
export const FORGOT_PASS = 'forgotPass';

class App extends Component {
    async componentWillMount() {}

    render() {
        return (
            <Router hideNavBar="true">
                <Scene key="root">
                    <Scene key={SPLASH} component={SplashScreen} initial/>
                    {/*Authentication SCENES*/}
                    <Scene key={LOGIN} component={LoginScreen}/>
                    <Scene key={REGISTER} component={RegisterScreen} />
                    <Scene key={FORGOT_PASS} component={RecoveryScreen} />
                    {/*PROFILE SCENES*/}
                    <Scene key={PROFILE} component={ProfileScreen}/>
                </Scene>
            </Router>
        );
    }
}

export default class AppContainer extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Root>
                    <App />
                </Root>
            </Provider>
        );
    }
}

