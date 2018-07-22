import {Actions} from 'react-native-router-flux';
import {NO_ACTION} from 'src/app/actions';

export const addProduct = (id) => {
    Actions.pop();
    return {type: NO_ACTION};
};

export const removeProduct = (id) => {
    Actions.pop();
    return {type: NO_ACTION};
};