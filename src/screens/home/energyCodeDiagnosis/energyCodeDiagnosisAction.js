import DiagnosisQuizApi from 'src/data/api/diagnosisQuizApi';
import { Actions } from 'react-native-router-flux';
import {INIT, NO_ACTION} from 'src/app/actions';
import {ENERGY_CODE} from 'src/data/models/treatment/treatmentType';

export const init = () => {
    return async(dispatch) => {
        let diagnosisQuiz = new DiagnosisQuizApi().instance().getEnergyCodeQuiz();
        return dispatch(getDiagnosisQuiz(diagnosisQuiz));
    }
};

function getDiagnosisQuiz(diagnosisQuiz) {
    return {
        type: INIT,
        diagnosisQuiz: diagnosisQuiz
    }
}

export const showTreatment = (client, diagnosis) => {
    diagnosis.type = ENERGY_CODE;
    Actions.treatment({newClient: client, diagnosis: diagnosis});
    return {type: NO_ACTION};
};

export const goBack = () => {
    Actions.pop();
    return {type: NO_ACTION};
};