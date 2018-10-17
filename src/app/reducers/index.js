import { combineReducers } from 'redux';
import splashReducer from 'src/screens/splash/splashReducer';
import loginReducer from 'src/screens/authentication/login/loginReducer';
import registerReducer from 'src/screens/authentication/register/registerReducer';
import recoverReducer from 'src/screens/authentication/recovery/recoveryReducer';
import profileReducer from 'src/screens/profile/profileReducer';

export default combineReducers({
    splash: splashReducer,
    login: loginReducer,
    register: registerReducer,
    recover: recoverReducer,
    profile: profileReducer
});