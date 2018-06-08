import UserService from '../../../data/api/UserApi';
import CountryApi from "../../../data/api/CountryApi";
import UserDao from "../../../data/database/UserDao";
import StatusCode from "../../../utils/StatusCode";
import { Actions } from 'react-native-router-flux';
import Constants from '../../../utils/Constants';
import LanguageDao from "../../../data/database/LanguageDao";
export const INIT = 'INIT';
export const ERROR = 'ERROR';
export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const NETWORK_ERROR = 'NETWORK_ERROR';

export function init() {
    return async(dispatch) => {
        let countries = await new CountryApi().instance().getAll();
        let languages = await new LanguageDao().getAll();
        return dispatch(getInitData(countries, languages));
    }
}

function getInitData(countries, languages) {
    return {
        type: INIT,
        countries: countries,
        languages: languages
    }
}

function requestRegister() {
    return {
        type: REQUEST_REGISTER
    }
}

function successRegister(userResponse) {
    Actions.main();
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

export function createClient(user) {
    return async (dispatch) => {
        dispatch(requestRegister());

        let response = await new UserService().instance().register(user);
        if (response && response.status == StatusCode.OK) {
            await new UserDao().savePrimaryUser(response.user);
            Actions.main();
            return dispatch(successRegister(response.user));
        } else if (response && response.status == StatusCode.INVALID_USER) {
            return dispatch(errorRegister(response.errorMsg))
        } else {
            return dispatch(errorNetwork())
        }
    }
}

export function startDiagnosis() {
    Actions.newDiagnosis();
    return {type: Constants.NO_ACTION};
}

export function goBack() {
    Actions.pop();
    return {type: Constants.NO_ACTION};
}