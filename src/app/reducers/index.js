import { combineReducers } from 'redux';
import splashReducer from './../../screens/splash/splashReducer';
import loginReducer from './../../screens/login/loginReducer';
import registerReducer from './../../screens/register/registerReducer';


export default combineReducers({
    splash: splashReducer,
    login: loginReducer,
    register: registerReducer
});