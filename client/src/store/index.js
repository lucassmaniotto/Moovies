import { legacy_createStore } from 'redux';
import reducer from './modules/rootReducer';

const store = legacy_createStore(reducer);

export default store;
