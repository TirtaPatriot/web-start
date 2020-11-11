import PouchDB from 'pouchdb'
import findPlugin from 'pouchdb-find'

PouchDB.plugin(findPlugin)

export const surveyDb = new PouchDB('sunat');
// export const surveyRemote = new PouchDB('http://user:password@localhost:5984/sunat');
export const surveyRemote = new PouchDB('https://super:m45ter@couchdb.tirtapatriot.com/sunat');

surveyDb.sync(surveyRemote, { live: true, retry: true })

export const appDb = new PouchDB('app');