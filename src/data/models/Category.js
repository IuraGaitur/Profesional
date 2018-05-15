
import categories from '../../../assets/categories.json';

export default class Category {

    static getNameById(id) {
        let result = '';
        for (let i = 0; i < categories.length; i++) {
            if(categories[i].id == id) {
                result = categories[i].title;
            }
        }

        return result;

    }

}