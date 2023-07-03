import { INCREMENT,DECREMENT,RESET } from "./actionTypes.js";

// action object creaation // means what actions to do 

export const increment =(value)=>{
    return {
        type:INCREMENT,
        value:value
    }
}
export const decrement =(value)=>{
    return {
        type:DECREMENT,
        value:value
    }
}
export const reset =()=>{
    return {
        type:RESET
    }
}

