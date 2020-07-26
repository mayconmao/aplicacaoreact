import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistorReducers from './persistReducers';

const sagaMonitor = process.env.NODE_ENV === 'development' 
? console.tron.createSagaMonitor() : null;

const SagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [SagaMiddleware];

const store = createStore(persistorReducers(rootReducer), middlewares);
const persistor = persistStore(store);

SagaMiddleware.run(rootSaga);

export { store, persistor };