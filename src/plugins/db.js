import PouchDB from 'pouchdb'

export const surveyDb = new PouchDB('sunat');
export const appDb = new PouchDB('app');