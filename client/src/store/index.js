import { legacy_createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './modules/rootReducer';
import saga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
