import Constants from 'src/utils/constants';
import UserMock from 'src/data/api/mock/userMock';
import UserNetwork from 'src/data/api/network/userNetwork';

export default class UserApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new UserMock();
        }
        return new UserNetwork();
    }
}