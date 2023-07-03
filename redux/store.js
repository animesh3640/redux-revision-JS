//storage
import CouterReducers from './reducres/CounterReducers.js'
import { createStore } from 'redux';

const store = createStore(CouterReducers);

export default store;

