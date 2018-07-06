import UserDao from 'src/data/database/UserDao';
import {Actions} from 'react-native-router-flux';
import {IS_LOGGED_IN, NO_USER} from 'src/app/actions';

export const checkForPrimaryUser = () => {
    return async (dispatch) => {
        let primaryUser = await new UserDao().getPrimaryUser();
        setTimeout(async function () {
            return dispatch(primaryUser ? hasPrimaryUser(primaryUser) : noPrimaryUser())
        }, 2000);
    }
};

const noPrimaryUser = () => {
    Actions.login();
    return {type: NO_USER}
};

const hasPrimaryUser = (user) => {
    Actions.main();
    return {user: user, type: IS_LOGGED_IN};
};