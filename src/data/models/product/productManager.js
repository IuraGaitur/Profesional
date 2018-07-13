import CollectionUtils from 'src/utils/collectionUtils';
export default class ProductManager {

    products = [];
    CARE_PRODUCTS = 0;
    STYLING_PRODUCTS = 1;

    setProducts(products) {
        this.products = products;
    }

    getCareProductsOnCategory(category) {
        return this.getProductsOnCategory(this.CARE_PRODUCTS, category);
    }

    getStylingProductsOnCategory(category) {
        return this.getProductsOnCategory(this.STYLING_PRODUCTS, category);
    }

    getProductsOnCategory(type, category) {
        if(CollectionUtils.isNullOrEmpty(this.products)) {
            return [];
        }

        let items = this.products[type].filter(item => item.id == category);
        return !CollectionUtils.isNullOrEmpty(items) ? items[0].products : [];
    }
}