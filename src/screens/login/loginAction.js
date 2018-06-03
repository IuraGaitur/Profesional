import UserService from '../../data/api/UserApi';
import UserDao from "../../data/database/UserDao";
import Strings from "./../../utils/Strings";
import StatusCode from "./../../utils/StatusCode";
import { Actions } from 'react-native-router-flux';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const EMAIL_FAIL = 'EMAIL_FAIL';
export const PASS_FAIL = 'PASS_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const NETWORK_ERROR = 'NETWORK_ERROR';
export const NO_DISPATCH = 'NO_DISPATCH';

function requestLogin() {
    return {
        type: REQUEST_LOGIN
    }
}

function successLogin(userResponse) {
    return {
        userResponse: userResponse,
        type: LOGIN_SUCCESS
    }
}

function errorLogin(errorMessage) {
    return {
        error: errorMessage,
        type: LOGIN_FAIL
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

export function loginRequest(email, pass) {
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
    return {type: NO_DISPATCH};
}

export function forgotPass() {
    Actions.forgotPass();
    return {type: NO_DISPATCH};
}

export function getInfo() {
    Actions.info();
    return {type: NO_DISPATCH};
}


