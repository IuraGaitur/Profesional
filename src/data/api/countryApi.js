import Constants from 'src/utils/constants';
import CountryMock from 'src/data/api/mock/countryMock';
import CountryNetwork from 'src/data/api/network/countryNetwork';

export default class CountryApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new CountryMock();
        }
        return new CountryNetwork();
    }
}