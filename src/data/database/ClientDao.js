import {AsyncStorage} from 'react-native';

export default class ContactsDao {

    CONTACTS_KEY = 'USER_KEY';

    async save(contact) {
        if(!contact) return;
        let contacts = AsyncStorage.getItem(this.CONTACTS_KEY);
        if(!contacts) {
            contacts = [];
        }else {
            contacts = JSON.parse(contacts);
        }
        contacts.push(contact);

        return await AsyncStorage.setItem(this.CONTACTS_KEY, JSON.stringify(contacts));
    }

    async getAll() {
        let data = await AsyncStorage.getItem(this.CONTACTS_KEY);
        if (data) {
            data = JSON.parse(data);
        } else {
            data = [];
        }
        return data;
    }
}