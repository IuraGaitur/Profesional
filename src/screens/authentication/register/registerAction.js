import UserService from 'src/data/api/UserApi';
import CountryApi from 'src/data/api/CountryApi';
import UserDao from 'src/data/database/UserDao';
import StatusCode from 'src/utils/StatusCode';
import { Actions } from 'react-native-router-flux';
import {INIT, REGISTER, SUCCESS, FAIL, NETWORK_ERROR, NO_ACTION} from 'src/app/actions';

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
        type: REGISTER
    }
}

function successRegister(userResponse) {
    Actions.main();
    return {
        userResponse: userResponse,
        type: SUCCESS
    }
}

function errorRegister(errorMessage) {
    return {
        error: errorMessage,
        type: FAIL
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
            Actions.main();
            return dispatch(successRegister(response.user));
        } else if (response && response.status == StatusCode.INVALID_USER) {
            return dispatch(errorRegister(response.errorMsg))
        } else {
            return dispatch(errorNetwork())
        }
    }
}

export function showInfo() {
    Actions.info();
    return {type: NO_ACTION};
}

export function goBack() {
    Actions.pop();
    return {type: NO_ACTION};
}