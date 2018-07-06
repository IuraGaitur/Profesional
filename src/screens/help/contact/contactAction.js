import CountryApi from 'src/data/api/CountryApi';
import { Actions } from 'react-native-router-flux';
import {INIT, NO_ACTION} from 'src/app/actions';

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


export function sendMessage(message) {
    return async (dispatch) => {
    }
}


export function goBack() {
    Actions.pop();
    return {type: NO_ACTION};
}