import { Actions } from 'react-native-router-flux';
import ClientDao from 'src/data/database/clientDao';
import {GET_CLIENT} from 'src/app/actions';

export const updateClient = (client) => {
    return async(dispatch) => {
        let updatedClient = await new ClientDao().update(client);
        Actions.pop();
        return dispatch({type: GET_CLIENT, client: updatedClient});

    }
};

