import Client from 'src/data/models/client';
import DbConnection from 'src/data/database/dbAccess';

export default class ClientDao {

    CLIENT_KEY = 'CLIENT_KEY';

    async add(client) {
        if (!client) return;
        let result = await DbConnection.post({'category': this.CLIENT_KEY, ...client});
        let newClient = await this.getByID(result.id);
        console.log(newClient);
        return newClient;
    }

    async update(client) {
        if (!client) return;
        await DbConnection.put({'category': this.CLIENT_KEY, ...client});
        let updatedClient = await this.getByID(client._id);
        console.log(updatedClient);
        return updatedClient;
    }

    async saveClientTreatment(client, diagnosisCode) {
        client.addDiagnosisCode(diagnosisCode);
        await this.update(client);
    }

    async getByID(id) {
        if (!id) return null;
        let result = await DbConnection.find({
            selector: {$and: [{category: this.CLIENT_KEY, _id: id}]}
        });
        console.log(result);
        let clients = result.docs.map(item => new Client().fromJSON(item));
        if (clients) { return clients[0];}

        return null;
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
        let dbClient = await DbConnection.find({selector: {category: this.CLIENT_KEY, _id: client._id}});
        console.log(dbClient);
        await DbConnection.remove(dbClient.docs[0]);
    }
}