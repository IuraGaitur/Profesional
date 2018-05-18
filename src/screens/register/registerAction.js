import UserService from '../../data/api/UserApi';
import CountryApi from "../../data/api/CountryApi";
import UserDao from "../../data/database/UserDao";
import StatusCode from "./../../utils/StatusCode";
export const INIT = 'INIT';
export const ERROR = 'ERROR';
export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const NETWORK_ERROR = 'NETWORK_ERROR';

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

function errorNetwork() {
    return {
        type: NETWORK_ERROR
    }
}

export function registerRequest(user) {
    return async (dispatch) => {
        dispatch(requestRegister());

        let response = await new UserService().instance().register(user);
        if (response && response.status == StatusCode.OK) {
            await new UserDao().savePrimaryUser(response.user);
            return dispatch(successRegister(response.user));
        } else if (response && response.status == StatusCode.INVALID_USER) {
            return dispatch(errorRegister(response.errorMsg))
        } else {
            return dispatch(errorNetwork())
        }
    }
}