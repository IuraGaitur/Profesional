import {INIT} from './energyCodeDiagnosisAction';

const defaultState = {
    diagnosisQuiz: {},
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case INIT:
            return {...state, diagnosisQuiz: action.diagnosisQuiz, networkError: false};
        default:
            return state;
    }
}