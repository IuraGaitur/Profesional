import { Actions } from 'react-native-router-flux';
import {INIT, NO_ACTION} from 'src/app/actions';
import DiagnosisQuizApi from 'src/data/api/diagnosisQuizApi';

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

export function createTreatment(client, diagnosis) {
    Actions.treatment({newClient: client, diagnosis: diagnosis});
    return {type: NO_ACTION};
}

export function goBack() {
    Actions.pop();
    return {type: NO_ACTION};
}