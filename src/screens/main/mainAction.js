import UserDao from '../../data/database/UserDao';
import MenuDao from '../../data/database/MenuDao';
import Constants from './../../utils/Constants';
import {Actions} from 'react-native-router-flux';
export const GET_MENU_ITEMS = 'GET_MENU_ITEMS';
export const SIGN_OUT = 'SIGN_OUT';

export function showHelp() {
    Actions.info();
    return {type: Constants.NO_ACTION};
}

export function showMyProfile() {
    Actions.profile();
    return {type: Constants.NO_ACTION};
}

export function showCreateClient() {
    Actions.createClient();
    return {type: Constants.NO_ACTION};
}

export function getMenuItems() {
    let items = new MenuDao().getItems();
    return {
        items: items,
        type: GET_MENU_ITEMS
    }
}

function sendSignOut() {
    return {
        type: SIGN_OUT
    }
}

export function signOut() {
    return async (dispatch) => {
        await new UserDao().removePrimaryUser();
        Actions.login();
        return dispatch(sendSignOut());
    }
}