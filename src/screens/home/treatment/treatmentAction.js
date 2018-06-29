import { Actions } from 'react-native-router-flux';
import Constants from './../../../utils/Constants';
import ClientDao from "../../../data/database/ClientDao";
export const INIT = 'INIT';

export function init() {
    return {
        type: INIT,
        infoCode: '<b>QUESTION STARTERS</b><br/><p>Before we start I would like to know:</p><br/><p>Can you describe your hair for me?</p><br/><p>What do you like about it?</p>',
        infoCare: '<b>QUESTION STARTERS</b><br/><p>Before we start I would like to know:</p><br/><p>Can you describe your hair for me?</p><br/><p>What do you like about it?</p>'
    }
}

export function showInfoScreen() {
    Actions.info();
    dispatch({type: Constants.NO_ACTION});
}

export function saveClient(client) {
    return async (dispatch) => {
        await new ClientDao().save(client);
        Actions.main();
        dispatch({type: Constants.NO_ACTION});
    }
}