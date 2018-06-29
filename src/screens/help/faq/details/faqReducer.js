import {REQUEST_QUESTIONS, REQUEST_SUCCESS, REQUEST_FAIL} from './faqAction';

const defaultState = {
    questions: []
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case REQUEST_QUESTIONS:
            return {...state, showLoading: true};
        case REQUEST_SUCCESS:
            return {...state, showLoading: false, questions: action.questions};
        case REQUEST_FAIL:
            return {...state, showLoading: false};
        default:
            return state;
    }
}