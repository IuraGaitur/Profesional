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

export function startDiagnosis(client) {
    Actions.newDiagnosis({newClient: client});
    return {type: Constants.NO_ACTION};
}

export function goBack() {
    Actions.pop();
    return {type: Constants.NO_ACTION};
}

export function showCookieInfo() {
   Actions.about({url: Constants.urlCookie});
   return {type: Constants.NO_ACTION};
}

export function showPrivacyInfo() {
    Actions.about({url: Constants.urlPrivacy});
    return {type: Constants.NO_ACTION};
}
