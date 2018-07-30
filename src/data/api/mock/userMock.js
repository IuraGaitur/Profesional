import {UserApi} from 'src/data/api/userApi';
import UserDao from 'src/data/database/userDao';
import loginDataSuccess from 'Sytem_Pro/assets/mocks/user/login/success.json';
import loginDataFail from 'Sytem_Pro/assets/mocks/user/login/fail.json';
import registerDataSuccess from 'Sytem_Pro/assets/mocks/user/register/success.json';
import registerDataFail from 'Sytem_Pro/assets/mocks/user/register/fail.json';
import resetSuccess from 'Sytem_Pro/assets/mocks/user/register/success.json';
import resetFail from 'Sytem_Pro/assets/mocks/user/register/fail.json';
import updateSuccess from 'Sytem_Pro/assets/mocks/user/update/success.json';
import updateFail from 'Sytem_Pro/assets/mocks/user/update/fail.json';


export default class UserMock implements UserApi {
    async login(email, pass) {
        let primaryUser = await new UserDao().getPrimaryUser();
        return new Promise((resolve, reject) => {
            setTimeout(function () {

                if (primaryUser && primaryUser.email == email) {
                    resolve(primaryUser);
                }
                resolve(loginDataFail);
            }, 1500);
        });
    }

    register(user) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (!user.email || !user.pass) {
                    resolve(registerDataFail)
                }
                resolve(user);
            }, 1500);
        });
    }

    resetPass(email, newPass) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (!email || !newPass) {
                    resolve(resetFail)
                }
                resolve(resetSuccess);
            }, 1500);
        });
    }

    updatePrimaryUser(user) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (!user) {
                    resolve(updateFail);
                }
                resolve(updateSuccess);
            }, 1500);
        });
    }
}