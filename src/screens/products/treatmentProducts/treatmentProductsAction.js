import {Actions} from 'react-native-router-flux';
import {NO_ACTION} from 'src/app/actions';

export const showDetails = (id) => {
    Actions.productDetails({id: id});
    return {type: NO_ACTION};
};