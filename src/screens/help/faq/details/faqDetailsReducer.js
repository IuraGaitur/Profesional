import {SUCCESS, FAIL, GET_QUESTIONS} from 'src/app/actions';

const defaultState = {
    questions: []
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {...state, showLoading: true};
        case SUCCESS:
            return {...state, showLoading: false, questions: action.questions};
        case FAIL:
            return {...state, showLoading: false};
        default:
            return state;
    }
}