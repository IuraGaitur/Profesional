import {GET_PRIMARY_USER, GET_CLIENTS, SHOW_LOADING, GET_ALL_CLIENTS} from 'src/app/actions';

const defaultState = {
    userClients: []
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case SHOW_LOADING:
            return {...state, isFetching: true};
        case GET_CLIENTS:
            return {...state, userClients: action.clients, isFetching: false};
        case GET_ALL_CLIENTS:
            return {...state, allClients: action.allClients, userClients: action.allClients, isFetching: false};
        case GET_PRIMARY_USER:
            return {...state, primaryUser: action.user};
        default:
            return state;
    }
}