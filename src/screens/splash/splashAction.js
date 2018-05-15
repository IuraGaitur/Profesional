import UserDao from "../../data/database/UserDao";
export const HAS_USER = 'HAS_USER';
export const NO_USER = 'NO_USER';

function noPrimaryUser() {
    return {
        type: NO_USER
    }
}

function hasPrimaryUser(user) {
    return {
        type: HAS_USER,
        user: user
    }
}

export function checkForPrimaryUser() {
    return async (dispatch) => {
        let primaryUser = await new UserDao().getPrimaryUser();
        setTimeout(async function () {
            return dispatch(primaryUser != null ? hasPrimaryUser(primaryUser) : noPrimaryUser())
        }, 2000);
    }
}