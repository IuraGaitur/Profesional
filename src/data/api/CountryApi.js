import Constants from 'src/utils/Constants';
import CountryMock from 'src/data/api/mock/CountryMock';
import CountryNetwork from 'src/data/api/network/CountryNetwork';

export default class CountryApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new CountryMock();
        }
        return new CountryNetwork();
    }
}