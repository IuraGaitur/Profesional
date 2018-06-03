import Constants from './../../utils/Constants';
import QuestionMock from "./mock/QuestionMock";
import QuestionNetwork from "./network/QuestionNetwork";

export default class QuestionApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new QuestionMock();
        }
        return new QuestionNetwork();
    }
}