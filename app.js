import store from "./redux/store.js";
import {decrement, increment, reset} from './redux/actions/CounterActionCreator.js';

console.log(store.getState())

store.subscribe(()=>{
    console.log("Updated value = ",store.getState());
})

store.dispatch(increment(1000))
store.dispatch(increment(10))
store.dispatch(increment(10))

store.dispatch(decrement(20));
store.dispatch(reset());