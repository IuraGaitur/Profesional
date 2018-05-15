/**
 * Created by iuriegaitur on 12/24/17.
 */
import {AsyncStorage} from 'react-native';
import categories from './../../assets/categories.json';

export default class StorageUtil {

    static COLLECTION_NAME = "category";

    /**
     * Save categories with they're state in local database
     * @param categories - with id, title and enabled
     * @returns {Promise.<void>}
     */
    static async setCategories(categories) {
        await AsyncStorage.setItem(this.COLLECTION_NAME, JSON.stringify(categories));
    }

    /**
     * Get all categories from local database
     * @returns {Promise.<*>}
     */
    static async getCategories() {
        let categories = await AsyncStorage.getItem(this.COLLECTION_NAME);
        let result = JSON.parse(categories);
        return result;
    }

    /**
     * Update category and save change in database
     * @param id
     * @param state
     * @returns {Promise.<void>}
     */
    static async updateCategory(id, state) {
        let categoriesData = await this.getCategories();

        if(!categoriesData && !Array.isArray(categoriesData)) {
            categoriesData = categories;
        }

        for (let i = 0; i < categoriesData.length; i++) {
            if(categoriesData[i].id === id) {
                categoriesData[i].enabled = state;
            }
        }
        await this.setCategories(categoriesData);
    }
}
