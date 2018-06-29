import {GET_CLIENTS, GET_PRIMARY_USER} from './clientsAction';

const defaultState = {
    userClients: []
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case GET_CLIENTS:
            return {...state, userClients: action.clients};
        case GET_PRIMARY_USER:
            return {...state, primaryUser: action.user};
        default:
            return state;
    }
}