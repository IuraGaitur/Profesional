import {UserApi} from "../UserApi";
import loginDataSuccess from "../../../../assets/mocks/user/login/success.json";
import loginDataFail from "../../../../assets/mocks/user/login/fail.json";
import registerDataSuccess from "../../../../assets/mocks/user/register/success.json";
import registerDataFail from '../../../../assets/mocks/user/register/fail.json';
import resetSuccess from "../../../../assets/mocks/user/register/success.json";
import resetFail from '../../../../assets/mocks/user/register/fail.json';

export default class UserMock implements UserApi {
    login(email, pass) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (email == 'test' && pass == 'test') {
                    resolve(loginDataSuccess);
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
                resolve(registerDataSuccess);
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
}