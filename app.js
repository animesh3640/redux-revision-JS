import store from "./redux/store.js";
import {decrement, increment, reset} from './redux/actions/CounterActionCreator.js';

console.log(store.getState())

store.subscribe(()=>{
    console.log("Updated value = ",store.getState());
})

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())

store.dispatch(decrement());
store.dispatch(reset());