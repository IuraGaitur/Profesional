import UserDao from '../../../data/database/UserDao';
import MenuDao from '../../../data/database/MenuDao';
import { Actions } from 'react-native-router-flux';
export const GET_PRIMARY_USER = 'GET_PRIMARY_USER';

export function getPrimaryUser() {
    return async (dispatch) => {
        let user = await new UserDao().getPrimaryUser();
        return dispatch(sendUser(user));
    }
}

function sendUser(user) {
    return {
        user: user,
        type: GET_PRIMARY_USER
    };
}