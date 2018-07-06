import {INIT} from 'src/app/actions';

const defaultState = {
    countries: [],
    networkError: false,
    showLoading: false,
    user: null
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case INIT:
            return {...state, countries: action.countries, networkError: false};
       default:
            return state;
    }
}