import React, {Component}  from 'react';
import {LoginScreen} from './src/screens/authentication/login';
import {ProfileScreen} from './src/screens/profile';
import {ClientsScreen} from './src/screens/home/client/clients';
import {RegisterScreen} from './src/screens/authentication/register';
import {SplashScreen} from './src/screens/splash';
import {RecoveryScreen} from './src/screens/authentication/recovery';
import {InfoScreen} from './src/screens/help/info';
import {AboutScreen} from './src/screens/help/about';
import {FaqScreen} from './src/screens/help/faq/list/index';
import {ContactScreen} from './src/screens/help/contact';
import {BlowDryDiagnosisScreen} from './src/screens/home/blowDryDiagnosis';
import {EnergyCodeDiagnosisScreen} from './src/screens/home/energyCodeDiagnosis';
import {CreateClientScreen} from './src/screens/home/client/newClient';
import {EditClientScreen} from './src/screens/home/client/editClient';
import {ClientDetailsScreen} from './src/screens/home/client/clientDetails';
import {NewDiagnosisScreen} from './src/screens/home/newDiagnosis';
import {TreatmentScreen} from './src/screens/home/treatment';
import {ProductsScreen} from './src/screens/products/list';
import {ProductScreen} from './src/screens/products/details';
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
export const EDIT_CLIENT = 'editClient';
export const CLIENT_DETAILS = 'clientDetails';
export const FORGOT_PASS = 'forgotPass';
export const INFO = 'info';
export const ABOUT = 'about';
export const MAIN = 'main';
export const FAQ = 'faq';
export const CONTACT_US = 'contact';
export const BLOW_DRY_DIAGNOSIS = 'blowDiagnosis';
export const ENERGY_CODE_DIAGNOSIS = 'energyDiagnosis';
export const PRODUCTS = 'products';
export const NEW_DIAGNOSIS = 'newDiagnosis';
export const TREATMENT = 'treatment';
export const PRODUCT_DETAILS = 'productDetails';

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
                    <Scene key={REGISTER} component={RegisterScreen} />
                    <Scene key={FORGOT_PASS} component={RecoveryScreen} />
                    {/*HELP SCENES*/}
                    <Scene key={FAQ} component={FaqScreen}/>
                    <Scene key={CONTACT_US} component={ContactScreen} />
                    <Scene key={INFO} component={InfoScreen}/>
                    <Scene key={ABOUT} component={AboutScreen}/>
                    {/*HOME SCENES*/}
                    <Scene key={MAIN} component={ClientsScreen}/>
                    <Scene key={CREATE_CLIENT} component={CreateClientScreen} />
                    <Scene key={EDIT_CLIENT} component={EditClientScreen} />
                    <Scene key={CLIENT_DETAILS} component={ClientDetailsScreen} />
                    <Scene key={NEW_DIAGNOSIS} component={NewDiagnosisScreen}/>
                    <Scene key={BLOW_DRY_DIAGNOSIS} component={BlowDryDiagnosisScreen} />
                    <Scene key={ENERGY_CODE_DIAGNOSIS} component={EnergyCodeDiagnosisScreen} />
                    <Scene key={TREATMENT} component={TreatmentScreen} />
                    {/*PRODUCTS SCENES*/}
                    <Scene key={PRODUCTS} component={ProductsScreen} />
                    <Scene key={PRODUCT_DETAILS} component={ProductScreen}/>
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

