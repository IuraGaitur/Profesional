import UserService from 'src/data/api/userApi';
import UserDao from 'src/data/database/userDao';
import Strings from 'src/utils/strings';
import StatusCode from 'src/utils/statusCode';
import Constants from 'src/utils/constants';
import { Actions } from 'react-native-router-flux';
import {LOGIN, FAIL, SUCCESS, EMAIL_FAIL, PASS_FAIL, NETWORK_ERROR, NO_ACTION} from 'src/app/actions';

function requestLogin() {
    return {
        type: LOGIN
    }
}

function successLogin(userResponse) {
    return {
        userResponse: userResponse,
        type: SUCCESS
    }
}

function errorLogin(errorMessage) {
    return {
        error: errorMessage,
        type: FAIL
    }
}

function errorEmail(errorMessage) {
    return {
        error: errorMessage,
        type: EMAIL_FAIL
    }
}

function errorPass(errorMessage) {
    return {
        error: errorMessage,
        type: PASS_FAIL
    }
}

function errorNetwork() {
    return {
        type: NETWORK_ERROR
    }
}

export const loginRequest = (email, pass) => {
    return async (dispatch) => {
        if (!email) return dispatch(errorEmail(Strings.ERROR_EMPTY_EMAIL));
        if (!pass) return dispatch(errorPass(Strings.ERROR_EMPTY_PASS));
        dispatch(requestLogin());

        let response = await new UserService().instance().login(email, pass);
        if (response && response.status == StatusCode.OK) {
            await new UserDao().savePrimaryUser(response.user);
            Actions.main();
            return dispatch(successLogin(response.user));
        } else if (response && response.status == StatusCode.INVALID_USER) {
            return dispatch(errorLogin(response.errorMsg))
        } else {
            return dispatch(errorNetwork())
        }
    }
}

export function register() {
    Actions.register();
    return {type: NO_ACTION};
}

export function forgotPass() {
    Actions.forgotPass();
    return {type: NO_ACTION};
}

export function getInfo() {
    Actions.info();
    return {type: NO_ACTION};
}


