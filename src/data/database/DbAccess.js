import PouchDB from 'pouchdb-react-native'
PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default);
PouchDB.plugin(require('pouchdb-find'));
const DbConnection = new PouchDB('SystemPro', {adapter: 'asyncstorage'});

export default DbConnection;