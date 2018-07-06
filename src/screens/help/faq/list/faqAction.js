import QuestionApi from 'src/data/api/QuestionApi';
import {Actions} from 'react-native-router-flux';
import {NO_ACTION, SUCCESS, FAIL, GET_QUESTIONS} from 'src/app/actions';

function errorRequest(errorMessage) {
    return {
        error: errorMessage,
        type: FAIL
    }
}

function successRequest(questions) {
    return {
        questions: questions,
        type: SUCCESS
    }
}

function requestItems() {
    return {
        type: GET_QUESTIONS
    }
}

export function goBack() {
    Actions.pop();
    return {type: NO_ACTION};
}

export function goContacts() {
    Actions.contact();
    return {type: NO_ACTION};
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
