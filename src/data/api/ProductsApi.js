import Constants from './../../utils/Constants';
import ProductsMock from "./mock/ProductsMock";
import ProductsNetwork from "./network/ProductsNetwork";

export default class ProductsApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new ProductsMock();
        }
        return new ProductsNetwork();
    }
}