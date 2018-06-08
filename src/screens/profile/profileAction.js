import UserApi from '../../data/api/UserApi';
import CountryApi from "../../data/api/CountryApi";
import UserDao from "../../data/database/UserDao";
import StatusCode from "./../../utils/StatusCode";
import { Actions } from 'react-native-router-flux';
export const INIT = 'INIT';
export const ERROR = 'ERROR';
export const SHOW_LOADING = 'SHOW_LOADING';
export const UPDATE_FAIL = 'UPDATE_FAIL';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const NETWORK_ERROR = 'NETWORK_ERROR';
export const GET_PRIMARY_USER = 'GET_PRIMARY_USER';


export function init() {
    return async(dispatch) => {
        let countries = await new CountryApi().instance().getAll();
        return dispatch(getCountries(countries));
    }
}


function showLoading() {
    return {
        type: SHOW_LOADING
    }
}

export function saveRequest(user) {
    return async (dispatch) => {
        dispatch(showLoading());

        let response = await new UserApi().instance().updatePrimaryUser(user);
        if (response && response.status == StatusCode.OK) {
            await new UserDao().savePrimaryUser(response.user);
            return dispatch(successUpdate(response.user));
        } else if (response && response.status == StatusCode.INVALID_USER) {
            return dispatch(errorRegister(response.errorMsg))
        } else {
            return dispatch(errorNetwork())
        }
    }
}

export function getPrimaryUser() {
    return async (dispatch) => {
        let user = await new UserDao().getPrimaryUser();
        return dispatch(sendUser(user));
    }
}

function sendUser(user) {
    return {
        user: user,
        type: GET_PRIMARY_USER
    };
}

function getCountries(countries) {
    return {
        type: INIT,
        countries: countries
    }
}

function successUpdate(userResponse) {
    Actions.main();
    return {
        userResponse: userResponse,
        type: UPDATE_SUCCESS
    }
}

function errorRegister(errorMessage) {
    return {
        error: errorMessage,
        type: UPDATE_FAIL
    }
}

function errorNetwork() {
    return {
        type: NETWORK_ERROR
    }
}