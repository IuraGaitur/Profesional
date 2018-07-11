import Constants from 'src/utils/constants';
import ProductsMock from 'src/data/api/mock/productsMock';
import ProductsNetwork from 'src/data/api/network/productsNetwork';

export default class ProductsApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new ProductsMock();
        }
        return new ProductsNetwork();
    }
}