import { combineReducers } from 'redux';
import splashReducer from './../../screens/splash/splashReducer';
import loginReducer from './../../screens/login/loginReducer';
import registerReducer from './../../screens/register/registerReducer';
import recoverReducer from './../../screens/recovery/recoveryReducer';
import infoReducer from './../../screens/info/infoReducer';
import mainReducer from './../../screens/main/mainReducer';
import faqReducer from './../../screens/faq/faqReducer';
import contactReducer from './../../screens/contact/contactReducer';
import productReducer from './../../screens/products/productsReducer';
import clientDetailsReducer from "./../../screens/details_form/detailsFormReducer";
import clientsReducer from './../../screens/clients/clientsReducer';
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
    clientDetails: clientDetailsReducer,
    products: productReducer,
    clients: clientsReducer,
    profile: profileReducer
});