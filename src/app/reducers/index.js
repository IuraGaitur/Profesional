import { combineReducers } from 'redux';
import splashReducer from './../../screens/splash/splashReducer';
import loginReducer from '../../screens/authentication/login/loginReducer';
import registerReducer from '../../screens/authentication/register/registerReducer';
import recoverReducer from '../../screens/authentication/recovery/recoveryReducer';
import infoReducer from '../../screens/help/info/infoReducer';
import faqReducer from '../../screens/help/faq/list/faqReducer';
import contactReducer from '../../screens/help/contact/contactReducer';
import productReducer from '../../screens/products/list/productsReducer';
import blowDryReducer from "../../screens/home/blowDryDiagnosis/blowDryDiagnosisReducer";
import energyCodeReducer from "../../screens/home/energyCodeDiagnosis/energyCodeDiagnosisReducer";
import clientsReducer from '../../screens/home/clients/clientsReducer';
import createClientReducer from '../../screens/home/newClient/createClientReducer';
import treatmentReducer from '../../screens/home/treatment/treatmentReducer';
import profileReducer from './../../screens/profile/profileReducer';

export default combineReducers({
    splash: splashReducer,
    login: loginReducer,
    register: registerReducer,
    recover: recoverReducer,
    info: infoReducer,
    faq: faqReducer,
    contact: contactReducer,
    energyCode: energyCodeReducer,
    blowDry: blowDryReducer,
    products: productReducer,
    clients: clientsReducer,
    profile: profileReducer,
    createClient: createClientReducer,
    treatment: treatmentReducer
});