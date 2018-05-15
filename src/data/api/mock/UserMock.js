import {UserApi} from "../UserApi";
import loginDataSuccess from "../../../../assets/mocks/user/login/success.json";
import loginDataFail from "../../../../assets/mocks/user/login/fail.json";
import registerDataSuccess from "../../../../assets/mocks/user/register/success.json";
import registerDataFail from '../../../../assets/mocks/user/register/fail.json';

export default class UserMock implements UserApi {
    login(email, pass) {
        setTimeout(async function () {
            if (email == 'iura.gaitur@gmail.com' && pass == '1234') {
                return loginDataSuccess
            }

            return loginDataFail;
        }, 1500);
    }

    register(email, pass, username) {
        setTimeout(async function () {
            if (!email || !pass) {
                return registerDataFail;
            }
            return registerDataSuccess;
        }, 1500);
    }
}