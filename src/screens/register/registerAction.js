import UserService from '../../data/api/UserApi';
import CountryApi from "../../data/api/CountryApi";
export const INIT = 'INIT';
export const ERROR = 'ERROR';
export const REQUEST_REGISTER = 'REQUEST_LOGIN';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export function init() {
    return async(dispatch) => {
        let countries = await new CountryApi().instance().getAll();
        return dispatch(getCountries(countries));
    }
}

function getCountries(countries) {
    return {
        type: INIT,
        countries: countries
    }
}

function requestRegister() {
    return {
        type: REQUEST_REGISTER
    }
}

function successRegister(userResponse) {
    return {
        userResponse: userResponse,
        type: REGISTER_SUCCESS
    }
}

function errorRegister(errorMessage) {
    return {
        error: errorMessage,
        type: REGISTER_FAIL
    }
}

function error(errorMessage, type) {
    return { error: errorMessage, errorType: type, type: ERROR}
}


export function registerRequest(user) {
    return async (dispatch) => {
        dispatch(requestRegister());

        let response = await new UserService().instance().register(user);
        if (response && response.status == StatusCode.OK) {
            return dispatch(successRegister(response.user));
        } else {
            return dispatch(errorRegister(response.error))
        }
    }
}