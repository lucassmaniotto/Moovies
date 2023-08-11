import { legacy_createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reducer from './modules/rootReducer';
import saga from './modules/rootSaga';
import persist from './modules/reduxPersist';

const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(
  persist(reducer),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(saga);

export const persistor = persistStore(store);
export default store;
