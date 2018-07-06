import Constants from 'src/utils/Constants';
import ProductsMock from 'src/data/api/mock/ProductsMock';
import ProductsNetwork from 'src/data/api/network/ProductsNetwork';

export default class ProductsApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new ProductsMock();
        }
        return new ProductsNetwork();
    }
}