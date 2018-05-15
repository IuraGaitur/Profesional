import Constants from './../../utils/Constants';
import CountryMock from "./mock/CountryMock";
import CountryNetwork from "./network/CountryNetwork";

export default class CountryApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new CountryMock();
        }
        return new CountryNetwork();
    }
}