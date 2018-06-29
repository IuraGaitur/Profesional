import ClientDao from '../../../../data/database/ClientDao';
import Constants from '../../../../utils/Constants';

import {Actions} from 'react-native-router-flux';
import UserDao from "../../../../data/database/UserDao";
export const GET_PRIMARY_USER = 'GET_PRIMARY_USER';
export const GET_CLIENTS = 'GET_CLIENTS';


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

export function showCreationScreen() {
    Actions.createClient();
    return {type: Constants.NO_ACTION};
}

export function getClients(text) {
    return async (dispatch) => {
        let clients = await new ClientDao().getByName(text);
        return dispatch(sendClients(clients));
    }
}

function sendClients(clients) {
    return {
        clients: clients,
        type: GET_CLIENTS
    };
}