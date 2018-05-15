import Constants from './../../utils/Constants';
import UserMock from "./mock/UserMock";
import UserNetwork from "./network/UserNetwork";

export default class UserApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new UserMock();
        }
        return new UserNetwork();
    }
}