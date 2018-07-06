import Constants from 'src/utils/Constants';
import QuestionMock from 'src/data/api/mock/QuestionMock';
import QuestionNetwork from 'src/data/api/network/QuestionNetwork';

export default class QuestionApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new QuestionMock();
        }
        return new QuestionNetwork();
    }
}