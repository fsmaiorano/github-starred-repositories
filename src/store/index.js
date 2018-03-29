import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';

const environment = JSON.stringify(process.env.NODE_ENV);

const sagaMonitor = environment === "development" ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middleware = [sagaMiddleware];

const createApproprieateStore = environment === "development" ? console.tron.createStore : createStore;

const store = createApproprieateStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store;
