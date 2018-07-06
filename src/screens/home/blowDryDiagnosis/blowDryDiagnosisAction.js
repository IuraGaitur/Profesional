import { Actions } from 'react-native-router-flux';
import {INIT, NO_ACTION} from 'src/app/actions';
import DiagnosisQuizApi from 'src/data/api/DiagnosisQuizApi';

export function init() {
    return async(dispatch) => {
        let diagnosisQuiz = new DiagnosisQuizApi().instance().getBlowDryQuiz();
        return dispatch(getDiagnosisQuiz(diagnosisQuiz));
    }
}

function getDiagnosisQuiz(diagnosisQuiz) {
    return {
        type: INIT,
        diagnosisQuiz: diagnosisQuiz
    }
}

export function createTreatment(client) {
    Actions.treatment({newClient: client});
    return {type: NO_ACTION};
}

export function goBack() {
    Actions.pop();
    return {type: NO_ACTION};
}