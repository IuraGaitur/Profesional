import { combineReducers } from 'redux';
import splashReducer from 'src/screens/splash/splashReducer';
import loginReducer from 'src/screens/authentication/login/loginReducer';
import registerReducer from 'src/screens/authentication/register/registerReducer';
import recoverReducer from 'src/screens/authentication/recovery/recoveryReducer';
import infoReducer from 'src/screens/help/info/infoReducer';
import faqReducer from 'src/screens/help/faq/list/faqReducer';
import faqDetailsReducer from 'src/screens/help/faq/details/faqDetailsReducer';
import contactReducer from 'src/screens/help/contact/contactReducer';
import productReducer from 'src/screens/products/list/productsReducer';
import blowDryReducer from 'src/screens/home/blowDryDiagnosis/blowDryDiagnosisReducer';
import energyCodeReducer from 'src/screens/home/energyCodeDiagnosis/energyCodeDiagnosisReducer';
import clientsReducer from 'src/screens/home/client/clients/clientsReducer';
import createClientReducer from 'src/screens/home/client/newClient/createClientReducer';
import clientDetailsReducer from 'src/screens/home/client/clientDetails/clientDetailsReducer';
import editClientReducer from 'src/screens/home/client/editClient/editClientReducer';
import treatmentReducer from 'src/screens/home/treatment/treatmentReducer';
import profileReducer from 'src/screens/profile/profileReducer';
import changeTreatmentReducer from 'src/screens/home/changeTreatment/changeTreatmentReducer';
import selectTreatmentProductsReducer from 'src/screens/products/selectTreatmentProducts/selectTreatmentProductsReducer';

export default combineReducers({
    splash: splashReducer,
    login: loginReducer,
    register: registerReducer,
    recover: recoverReducer,
    info: infoReducer,
    faq: faqReducer,
    faqDetails: faqDetailsReducer,
    contact: contactReducer,
    energyCode: energyCodeReducer,
    blowDry: blowDryReducer,
    products: productReducer,
    profile: profileReducer,
    clients: clientsReducer,
    createClient: createClientReducer,
    clientDetails: clientDetailsReducer,
    editClient: editClientReducer,
    treatment: treatmentReducer,
    selectTreatmentProducts: selectTreatmentProductsReducer,
    changeTreatment: changeTreatmentReducer
});