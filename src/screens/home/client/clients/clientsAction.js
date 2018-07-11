import ClientDao from 'src/data/database/clientDao';
import {Actions} from 'react-native-router-flux';
import UserDao from 'src/data/database/userDao';
import {GET_PRIMARY_USER, GET_CLIENTS, NO_ACTION, SHOW_LOADING, GET_ALL_CLIENTS} from 'src/app/actions';

export const showClientDetails = (client) => {
    Actions.clientDetails({client});
    return {type: NO_ACTION};
};

export const getPrimaryUser = () => {
    return async (dispatch) => {
        let user = await new UserDao().getPrimaryUser();
        return dispatch(sendUser(user));
    }
}

export const showCreationScreen = () => {
    Actions.createClient();
    return {type: NO_ACTION};
};

export const getClients = (text) => {
    return async (dispatch) => {
        dispatch(showLoading());
        let clients = await new ClientDao().getByName(text);
        return dispatch(sendClients(clients));
    }
};

export const getAllClients = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        let clients = await new ClientDao().getAll();
        return dispatch(sendAllClients(clients));
    }
};

function showLoading() {
    return {type: SHOW_LOADING}
}

function sendUser(user) {
    return {user: user, type: GET_PRIMARY_USER};
}

function sendAllClients(clients) {
    return {allClients: clients, type: GET_ALL_CLIENTS};
}

function sendClients(clients) {
    return {clients: clients, type: GET_CLIENTS};
}