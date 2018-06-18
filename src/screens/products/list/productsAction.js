import ProductsApi from './../../data/api/ProductsApi';
export const GET_ITEMS = 'GET_ITEMS';

export function getProducts() {
    let items = new ProductsApi().instance().getAll();
    return {
        items: items,
        type: GET_ITEMS
    }
}