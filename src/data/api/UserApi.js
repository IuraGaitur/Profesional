import Constants from 'src/utils/Constants';
import UserMock from 'src/data/api/mock/UserMock';
import UserNetwork from 'src/data/api/network/UserNetwork';

export default class UserApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new UserMock();
        }
        return new UserNetwork();
    }
}