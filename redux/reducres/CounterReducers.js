// Initialization and functional

import {INCREMENT,DECREMENT,RESET} from '../actions/actionTypes.js';
let initialState =0;

function CounterReducer(state=initialState,actions){

    switch(actions.type){

        case INCREMENT:
            return state+actions.value;
        case DECREMENT:
            return state-actions.value;
        case RESET:
            return 0;
        default:
            return state;

    }
    
}
export default CounterReducer;
