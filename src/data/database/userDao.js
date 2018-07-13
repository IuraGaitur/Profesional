import {AsyncStorage} from 'react-native';

export default class UserDao {

    PRIMARY_USER_KEY = 'USER_KEY';

    async savePrimaryUser(user) {
        if(!user) return;
        return await AsyncStorage.setItem(this.PRIMARY_USER_KEY, JSON.stringify(user));
    }

    async getPrimaryUser() {
        let data = await AsyncStorage.getItem(this.PRIMARY_USER_KEY);
        if (data) {
            data = JSON.parse(data);
        }
        return data;
    }

    async removePrimaryUser() {
        return await AsyncStorage.removeItem(this.PRIMARY_USER_KEY);
    }
}