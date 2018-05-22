import UserDao from "../../data/database/UserDao";
import { Actions } from 'react-native-router-flux';
export const HAS_USER = 'HAS_USER';
export const NO_USER = 'NO_USER';

function noPrimaryUser() {
    Actions.login();
    return {
        type: NO_USER
    }
}

function hasPrimaryUser(user) {
    Actions.login();
    return {
        type: HAS_USER,
        user: user
    }
}

export function checkForPrimaryUser() {
    return async (dispatch) => {
        let primaryUser = await new UserDao().getPrimaryUser();
        setTimeout(async function () {
            return dispatch(primaryUser != null ? hasPrimaryUser(primaryUser) : noPrimaryUser())
        }, 2000);
    }
}