import { INCREMENT,DECREMENT,RESET } from "./actionTypes.js";

// action object creaation // means what actions to do 

export const increment =()=>{
    return {
        type:INCREMENT
    }
}
export const decrement =()=>{
    return {
        type:DECREMENT
    }
}
export const reset =()=>{
    return {
        type:RESET
    }
}

