import {Actions} from 'react-native-router-flux';
import ClientDao from 'src/data/database/clientDao';
import {INIT, NO_ACTION} from 'src/app/actions';
import DiagnosisCode from 'src/data/models/diagnosisCode';

export const init = () => {
    return {
        type: INIT,
        infoCode: '<b>QUESTION STARTERS</b><br/><p>Before we start I would like to know:</p><br/><p>Can you describe your hair for me?</p><br/><p>What do you like about it?</p>',
        infoCare: '<b>QUESTION STARTERS</b><br/><p>Before we start I would like to know:</p><br/><p>Can you describe your hair for me?</p><br/><p>What do you like about it?</p>'
    }
};

export const showInfoScreen = () => {
    Actions.info();
    return {type: NO_ACTION};
};

export const saveClientTreatment = (client, diagnosis, treatment) => {
    return async (dispatch) => {
        let diagnosisCode = new DiagnosisCode(diagnosis, treatment, diagnosis.type);
        await new ClientDao().saveClientTreatment(client, diagnosisCode);
        Actions.main();
        dispatch({type: NO_ACTION});
    }
};

export const showProductInfo = (id) => {
    Actions.productDetails({id: id, canRemoveProduct: true});
    return {type: NO_ACTION};
};

export const modifyTreatment = () => {
    Actions.changeTreatment();
    return {type: NO_ACTION};
};

export const treatmentProducts = () => {
    Actions.treatmentProducts();
    return {type: NO_ACTION};
};

export const selectTreatmentProducts = () => {
    Actions.selectTreatmentProducts();
    return {type: NO_ACTION};
};