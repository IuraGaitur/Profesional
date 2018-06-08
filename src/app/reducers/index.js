import { combineReducers } from 'redux';
import splashReducer from './../../screens/splash/splashReducer';
import loginReducer from '../../screens/authentication/login/loginReducer';
import registerReducer from '../../screens/authentication/register/registerReducer';
import recoverReducer from '../../screens/authentication/recovery/recoveryReducer';
import infoReducer from '../../screens/help/info/infoReducer';
import mainReducer from '../../screens/main/mainReducer';
import faqReducer from '../../screens/help/faq/faqReducer';
import contactReducer from '../../screens/help/contact/contactReducer';
import productReducer from './../../screens/products/productsReducer';
import blowDryReducer from "../../screens/home/blowDryDiagnosis/blowDryDiagnosisReducer";
import energyCodeReducer from "../../screens/home/energyCodeDiagnosis/energyCodeDiagnosisReducer";
import clientsReducer from '../../screens/home/clients/clientsReducer';
import createClientReducer from '../../screens/home/newClient/createClientReducer';
import profileReducer from './../../screens/profile/profileReducer';

export default combineReducers({
    splash: splashReducer,
    login: loginReducer,
    register: registerReducer,
    recover: recoverReducer,
    info: infoReducer,
    faq: faqReducer,
    contact: contactReducer,
    main: mainReducer,
    energyCode: energyCodeReducer,
    blowDry: blowDryReducer,
    products: productReducer,
    clients: clientsReducer,
    profile: profileReducer,
    createClient: createClientReducer
});