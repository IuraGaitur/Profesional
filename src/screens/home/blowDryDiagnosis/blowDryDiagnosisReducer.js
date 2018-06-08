import {REQUEST_REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, INIT, ERROR, NETWORK_ERROR} from './blowDryDiagnosisAction';

const defaultState = {
    questions: [],
    networkError: false,
    showLoading: false,
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case INIT:
            return {...state, blowQuestions: action.blowQuestions, networkError: false};
        case NETWORK_ERROR:
            return {...state, errorMessage: action.error, user: null, showLoading: false, networkError: true};
        default:
            return state;
    }
}