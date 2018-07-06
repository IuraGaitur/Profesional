import CountryApi from 'src/data/api/CountryApi';
import { Actions } from 'react-native-router-flux';
import Constants from 'src/utils/Constants';
import LanguageDao from 'src/data/database/LanguageDao';
import ClientDao from 'src/data/database/ClientDao';
import {INIT, NO_ACTION} from 'src/app/actions';

export const init = () => {
    return async(dispatch) => {
        let countries = await new CountryApi().instance().getAll();
        let languages = await new LanguageDao().getAll();
        return dispatch(getInitData(countries, languages));
    }
};

function getInitData(countries, languages) {
    return {
        type: INIT,
        countries: countries,
        languages: languages
    }
}

export const startDiagnosis = (client) => {
    new ClientDao().add(client);
    Actions.newDiagnosis({newClient: client});
    return {type: NO_ACTION};
};

export const goBack = () => {
    Actions.pop();
    return {type: NO_ACTION};
};

export const showCookieInfo = () => {
   Actions.about({url: Constants.urlCookie, title: '<b>Cookie Policy</b>'});
   return {type: NO_ACTION};
};

export const showPrivacyInfo = () => {
    Actions.about({url: Constants.urlPrivacy, title: '<b>Privacy Info</b>'});
    return {type: NO_ACTION};
};
