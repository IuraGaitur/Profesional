import ProductsApi from 'src/data/api/productsApi';
import {Actions} from 'react-native-router-flux';
import {GET_ITEMS, GET_CATEGORIES, NO_ACTION} from 'src/app/actions';


export function getProducts() {
    let items = new ProductsApi().instance().getAll();
    return {items, type: GET_ITEMS}
}

export function getProductsCategories() {
    let categories = new ProductsApi().instance().getCategories();
    return {categories, type: GET_CATEGORIES};
}

export function showDetails(id) {
    Actions.productDetails({id: id});
    return {type: NO_ACTION};
}