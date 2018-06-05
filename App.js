import React, {Component}  from 'react';
import {LoginScreen} from './src/screens/login';
import {ProfileScreen} from './src/screens/profile';
import {MainScreen} from './src/screens/main';
import {RegisterScreen} from './src/screens/register';
import {SplashScreen} from './src/screens/splash';
import {RecoveryScreen} from './src/screens/recovery';
import {InfoScreen} from './src/screens/info';
import {FaqScreen} from './src/screens/faq';
import {ContactScreen} from './src/screens/contact';
import {DetailsFormScreen} from './src/screens/details_form';
import {CreateClientScreen} from './src/screens/add_client';
import {ProductsScreen} from './src/screens/products';
import {CategoryScreen} from './src/screens/category';
import {Router, Scene} from "react-native-router-flux";
import ScreenUtils from "./src/utils/ScreenUtils";
import {Provider} from 'react-redux';
import store from './src/app/store'

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
export const DETAILS_FORM = 'detailsForm';
export const PRODUCTS = 'products';
export const CATEGORY = 'category';

class App extends Component {
    async componentWillMount() {
        //await ScreenUtils.calcHeight();
    }

    render() {
        return (
            <Router hideNavBar="true">
                <Scene key="root">
                    <Scene key={CATEGORY} component={CategoryScreen} initial/>
                    <Scene key={SPLASH} component={SplashScreen} />
                    <Scene key={LOGIN} component={LoginScreen} />
                    <Scene key={REGISTER} component={RegisterScreen}/>
                    <Scene key={MAIN} component={MainScreen} />
                    <Scene key={FORGOT_PASS} component={RecoveryScreen} />
                    <Scene key={FAQ} component={FaqScreen}/>
                    <Scene key={CONTACT_US} component={ContactScreen}/>
                    <Scene key={INFO} component={InfoScreen} />
                    <Scene key={DETAILS_FORM} component={DetailsFormScreen} />
                    <Scene key={PRODUCTS} component={ProductsScreen} />
                    <Scene key={PROFILE} component={ProfileScreen} />
                    <Scene key={CREATE_CLIENT} component={CreateClientScreen}/>
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

