import countries from "../../../../assets/mocks/country/success.json";

export default class UserMock {
    getAll() {
        return countries;
    }
}