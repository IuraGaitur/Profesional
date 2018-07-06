import { combineReducers } from 'redux';
import splashReducer from 'src/screens/splash/splashReducer';
import loginReducer from 'src/screens/authentication/login/loginReducer';
import registerReducer from 'src/screens/authentication/register/registerReducer';
import recoverReducer from 'src/screens/authentication/recovery/recoveryReducer';
import infoReducer from 'src/screens/help/info/infoReducer';
import faqReducer from 'src/screens/help/faq/list/faqReducer';
import contactReducer from 'src/screens/help/contact/contactReducer';
import productReducer from 'src/screens/products/list/productsReducer';
import blowDryReducer from 'src/screens/home/blowDryDiagnosis/blowDryDiagnosisReducer';
import energyCodeReducer from 'src/screens/home/energyCodeDiagnosis/energyCodeDiagnosisReducer';
import clientsReducer from 'src/screens/home/client/clients/clientsReducer';
import createClientReducer from 'src/screens/home/client/newClient/createClientReducer';
import treatmentReducer from 'src/screens/home/treatment/treatmentReducer';
import profileReducer from 'src/screens/profile/profileReducer';

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