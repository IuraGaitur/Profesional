import { combineReducers } from 'redux';
import splashReducer from './../../screens/splash/splashReducer';
import loginReducer from './../../screens/login/loginReducer';
import registerReducer from './../../screens/register/registerReducer';
import recoverReducer from './../../screens/recovery/recoveryReducer';
import infoReducer from './../../screens/info/infoReducer';
import mainReducer from './../../screens/main/mainReducer';

export default combineReducers({
    splash: splashReducer,
    login: loginReducer,
    register: registerReducer,
    recover: recoverReducer,
    info: infoReducer,
    main: mainReducer
});