import PouchDB from 'pouchdb'
import findPlugin from 'pouchdb-find'

PouchDB.plugin(findPlugin)

export const surveyDb = new PouchDB('sunat');

export const appDb = new PouchDB('app');