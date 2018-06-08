import Constants from './../../utils/Constants';
import DetailsQuestionsMock from "./mock/DetailsQuestionsMock";
import DetailsQuestionsNetwork from "./network/DetailsQuestionsNetwork";

export default class DetailsQuestionsApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new DetailsQuestionsMock();
        }
        return new DetailsQuestionsNetwork();
    }
}