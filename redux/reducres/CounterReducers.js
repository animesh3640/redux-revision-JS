// Initialization and functional

import {INCREMENT,DECREMENT,RESET} from '../actions/actionTypes.js';
let initialState =0;

function CounterReducer(state=initialState,actions){

    switch(actions.type){

        case INCREMENT:
            return state+1;
        case DECREMENT:
            return state-1;
        case RESET:
            return 0;
        default:
            return state;

    }
    
}
export default CounterReducer;
