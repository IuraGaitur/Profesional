import React, {Component}  from 'react';
import {LoginScreen} from './src/screens/authentication/login';
import {ProfileScreen} from './src/screens/profile';
import {MainScreen} from './src/screens/main';
import {RegisterScreen} from './src/screens/authentication/register';
import {SplashScreen} from './src/screens/splash';
import {RecoveryScreen} from './src/screens/authentication/recovery';
import {InfoScreen} from './src/screens/help/info';
import {FaqScreen} from './src/screens/help/faq';
import {ContactScreen} from './src/screens/help/contact';
import {BlowDryDiagnosisScreen} from './src/screens/home/blowDryDiagnosis';
import {EnergyCodeDiagnosisScreen} from './src/screens/home/energyCodeDiagnosis';
import {CreateClientScreen} from './src/screens/home/newClient';
import {ProductsScreen} from './src/screens/products';
import {NewDiagnosisScreen} from './src/screens/home/newDiagnosis';
import {Router, Scene} from "react-native-router-flux";
import ScreenUtils from "./src/utils/ScreenUtils";
import {Provider} from 'react-redux';
import store from './src/app/store';
import {Root} from 'native-base'

export const SPLASH = 'splash';
export const LOGIN = 'login';
export const REGISTER = 'register';
export const PROFILE = 'profile';
export const CREATE_CLIENT = 'createClient';
export const FORGOT_PASS = 'forgotPass';
export const INFO = 'info';
export const MAIN = 'main';
export const FAQ = 'faq';
export const CONTACT_US = 'contact';
export const BLOW_DRY_DIAGNOSIS = 'blowDiagnosis';
export const ENERGY_CODE_DIAGNOSIS = 'energyDiagnosis';
export const PRODUCTS = 'products';
export const NEW_DIAGNOSIS = 'newDiagnosis';

class App extends Component {
    async componentWillMount() {
        //await ScreenUtils.calcHeight();
    }

    render() {
        return (
            <Router hideNavBar="true">
                <Scene key="root">

                    <Scene key={SPLASH} component={SplashScreen} initial/>
                    {/*Authentication SCENES*/}
                    <Scene key={LOGIN} component={LoginScreen}/>
                    <Scene key={REGISTER} component={RegisterScreen}/>
                    <Scene key={FORGOT_PASS} component={RecoveryScreen}/>
                    {/*HELP SCENES*/}
                    <Scene key={FAQ} component={FaqScreen}/>
                    <Scene key={CONTACT_US} component={ContactScreen}/>
                    <Scene key={INFO} component={InfoScreen}/>
                    {/*MAIN*/}
                    <Scene key={MAIN} component={MainScreen} />
                    {/*HOME SCENES*/}
                    <Scene key={CREATE_CLIENT} component={CreateClientScreen} />
                    <Scene key={NEW_DIAGNOSIS} component={NewDiagnosisScreen}/>
                    <Scene key={BLOW_DRY_DIAGNOSIS} component={BlowDryDiagnosisScreen} />
                    <Scene key={ENERGY_CODE_DIAGNOSIS} component={EnergyCodeDiagnosisScreen}/>
                    {/*PRODUCTS SCENES*/}
                    <Scene key={PRODUCTS} component={ProductsScreen}/>
                    {/*PROFILE SCENES*/}
                    <Scene key={PROFILE} component={ProfileScreen}/>
                    {/*PRODUCTS SCENES*/}

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

