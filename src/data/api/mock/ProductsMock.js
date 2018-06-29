import products from "../../../../assets/mocks/products/items/success.json";
import categories from "../../../../assets/mocks/products/categories/success.json";

export default class ProductsMock {
    getAll() {
        return products;
    }

    getCategories() {
        return categories;
    }
}