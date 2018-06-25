import { Actions } from 'react-native-router-flux';
import Constants from './../../../utils/Constants';
import ClientDao from "../../../data/database/ClientDao";

export function saveClient(client) {
    return async (dispatch) => {
        await new ClientDao().save(client);
        Actions.main();
        dispatch({type: Constants.NO_ACTION});
    }
}