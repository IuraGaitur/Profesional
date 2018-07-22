import products from 'Sytem_Pro/assets/mocks/products/items/success.json';
import categories from 'Sytem_Pro/assets/mocks/products/categories/success.json';
import CollectionUtils from 'src/utils/collectionUtils';

export default class ProductsMock {
    getAll() {
        return products;
    }

    getByCategory(type, categoryID) {
        let position = type == 'care' ? 0 : 1;
        categoryID = categoryID ? categoryID : 1;
        let filteredCategories = products[position].filter(item => item.id == categoryID);
        if(!CollectionUtils.isNullOrEmpty(filteredCategories)) {
            return filteredCategories[0].products;
        }

        return [];
    }

    getCategories() {
        return categories;
    }
}