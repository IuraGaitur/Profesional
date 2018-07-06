import {AsyncStorage} from 'react-native';
import CollectionUtils from 'src/utils/CollectionUtils';
import Client from 'src/data/models/Client';
import DbConnection from 'src/data/database/DbAccess';

export default class ClientDao {

    CLIENT_KEY = 'CLIENT_KEY';

    async add(client) {
        if (!client) return;
        await DbConnection.post({'category': this.CLIENT_KEY, ...client});
    }

    async saveClientTreatment(client) {

    }

    async getByName(text) {
        let result = await DbConnection.find({
            selector: {
                $and: [{
                    category: this.CLIENT_KEY,
                    $or: [{firstName: {$regex: '.*?' + text + '.*?'}}, {lastName: {$regex: '.*?' + text + '.*?'}}]
                }]
            }
        });
        let clients = result.docs.map(item => new Client().fromJSON(item));
        return clients;
    }

    async getAll() {
        let result = await DbConnection.find({selector: {category: this.CLIENT_KEY}});
        let clients = result.docs.map(item => new Client().fromJSON(item));
        return clients;
    }

    async remove(client) {
        let dbClient = await DbConnection.find({selector: {category: this.CLIENT_KEY, _rev: client._rev}});
        console.log(dbClient);
        await DbConnection.remove(dbClient.docs[0]);
    }
}