import ProductsApi from '../../../data/api/ProductsApi';
import {Actions} from 'react-native-router-flux';
import Constants from './../../../utils/Constants';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_CATEGORIES = 'GET_CATEGORIES';

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
    return {type: Constants.NO_ACTION};
}