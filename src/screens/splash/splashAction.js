import UserDao from 'src/data/database/userDao';
import GenderDao from 'src/data/database/genderDao';
import CountryApi from 'src/data/api/countryApi';
import LanguageDao from 'src/data/database/languageDao';
import {Actions} from 'react-native-router-flux';
import {IS_LOGGED_IN, NO_USER, INIT} from 'src/app/actions';

export const getResources = () => {
    return async(dispatch) => {
        let countries = await new CountryApi().instance().getAll();
        let languages = await new LanguageDao().getAll();
        let genders = await new GenderDao().getAll();
        return dispatch(getResourcesInfo(countries, languages, genders));
    }
};

function getResourcesInfo(countries, languages, genders) {
    return {
        type: INIT,
        countries: countries,
        languages: languages,
        genders: genders
    }
}


export const checkForPrimaryUser = () => {
    return async (dispatch) => {
        let primaryUser = await new UserDao().getPrimaryUser();
        setTimeout(async function () {
            return dispatch(primaryUser ? hasPrimaryUser(primaryUser) : noPrimaryUser())
        }, 2000);
    }
};

const noPrimaryUser = () => {
    Actions.login();
    return {type: NO_USER}
};

const hasPrimaryUser = (user) => {
    Actions.main();
    return {user: user, type: IS_LOGGED_IN};
};