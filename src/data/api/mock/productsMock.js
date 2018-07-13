import products from 'Sytem_Pro/assets/mocks/products/items/success.json';
import categories from 'Sytem_Pro/assets/mocks/products/categories/success.json';

export default class ProductsMock {
    getAll() {
        return products;
    }

    getCategories() {
        return categories;
    }
}