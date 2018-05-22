import UserDao from '../../data/database/UserDao';
import MenuDao from '../../data/database/MenuDao';
import { Actions } from 'react-native-router-flux';
export const GET_MENU_ITEMS = 'GET_MENU_ITEMS';
export const SIGN_OUT = 'SIGN_OUT';

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