import Constants from 'src/utils/constants';
import QuestionMock from 'src/data/api/mock/questionMock';
import QuestionNetwork from 'src/data/api/network/questionNetwork';

export default class QuestionApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new QuestionMock();
        }
        return new QuestionNetwork();
    }
}