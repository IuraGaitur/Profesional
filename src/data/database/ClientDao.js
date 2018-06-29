import {AsyncStorage} from 'react-native';
import CollectionUtils from "../../utils/CollectionUtils";
import Client from "../models/Client";

export default class ClientDao {

    CLIENT_KEY = 'CLIENT_KEY';

    async save(client) {
        if (!client) return;
        let clients = await AsyncStorage.getItem(this.CLIENT_KEY);
        if (!clients) {
            clients = [];
        } else {
            clients = JSON.parse(clients);
        }
        clients.push(client);

        return await AsyncStorage.setItem(this.CLIENT_KEY, JSON.stringify(clients));
    }

    async getByName(text) {
        let clients = await this.getAll();
        if (CollectionUtils.isNullOrEmpty(clients)) return clients;
        if (!text) return clients;
        let filteredClients = clients.filter(item => (item.firstName.includes(text) || item.lastName.includes(text)));
        return filteredClients;
    }

    async getAll() {
        let clients = await AsyncStorage.getItem(this.CLIENT_KEY);
        if (clients) {
            clients = JSON.parse(clients);
            clients = clients.map(item => new Client().fromJSON(item));
        } else {
            clients = [];
        }
        return clients;
    }
}