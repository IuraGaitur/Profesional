import {UserApi} from 'src/data/api/userApi';
import UserDao from 'src/data/database/userDao';
import loginDataSuccess from 'Cuba_ECSP/assets/mocks/user/login/success.json';
import loginDataFail from 'Cuba_ECSP/assets/mocks/user/login/fail.json';
import registerDataSuccess from 'Cuba_ECSP/assets/mocks/user/register/success.json';
import registerDataFail from 'Cuba_ECSP/assets/mocks/user/register/fail.json';
import resetSuccess from 'Cuba_ECSP/assets/mocks/user/register/success.json';
import resetFail from 'Cuba_ECSP/assets/mocks/user/register/fail.json';
import updateSuccess from 'Cuba_ECSP/assets/mocks/user/update/success.json';
import updateFail from 'Cuba_ECSP/assets/mocks/user/update/fail.json';


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