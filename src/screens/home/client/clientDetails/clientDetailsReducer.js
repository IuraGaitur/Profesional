import {GET_CLIENT} from "src/app/actions";
import Client from 'src/data/models/client';

const defaultState = {
    currentClient: new Client()
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case GET_CLIENT:
            return {...state, currentClient: action.client};
        default:
            return state;
    }
}