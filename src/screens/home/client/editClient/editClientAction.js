import { Actions } from 'react-native-router-flux';
import ClientDao from 'src/data/database/clientDao';
import {GET_CLIENT} from 'src/app/actions';
import Constants from 'src/utils/constants';
import {NO_ACTION} from 'src/app/actions';

export const updateClient = (client) => {
    return async(dispatch) => {
        let updatedClient = await new ClientDao().update(client);
        Actions.pop();
        return dispatch({type: GET_CLIENT, client: updatedClient});

    }
};

export const showCookieInfo = () => {
    Actions.about({url: Constants.urlCookie, title: '<b>Cookie Policy</b>'});
    return {type: NO_ACTION};
};

export const showPrivacyInfo = () => {
    Actions.about({url: Constants.urlPrivacy, title: '<b>Privacy Info</b>'});
    return {type: NO_ACTION};
};

