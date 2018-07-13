import Constants from 'src/utils/constants';
import DetailsQuestionsMock from 'src/data/api/mock/diagnosisQuizMock';
import DetailsQuestionsNetwork from 'src/data/api/network/diagnosisQuizNetwork';

export default class DiagnosisApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new DetailsQuestionsMock();
        }
        return new DetailsQuestionsNetwork();
    }
}