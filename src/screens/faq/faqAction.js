import QuestionApi from '../../data/api/QuestionApi';
import {Actions} from 'react-native-router-flux';
export const NO_DISPATCH = 'NO_DISPATCH';
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

function errorRequest(errorMessage) {
    return {
        error: errorMessage,
        type: REQUEST_FAIL
    }
}

function successRequest(questions) {
    return {
        questions: questions,
        type: REQUEST_SUCCESS
    }
}

function requestItems() {
    return {
        type: REQUEST_QUESTIONS
    }
}

export function goBack() {
    Actions.pop();
    return {type: NO_DISPATCH};
}

export function goContacts() {
    Actions.contact();
    return {type: NO_DISPATCH};
}

export function getQuestions(name = '') {
    return async (dispatch) => {
        dispatch(requestItems());
        let response = await new QuestionApi().instance().getQuestions(name);
        if (response) {
            return dispatch(successRequest(response));
        }
        return dispatch(errorRequest(response.error))
    }
}
