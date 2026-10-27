import { CartState } from "./cart.type";
import { Product } from "../../types/Product";

export type CartAction = 
| {type: "ADD", payload: Product}
| {type: "LOAD", payload: CartState}
| {type: "DECREMENT", payload: number}
| {type: "REMOVE", payload:number}
| {type: "CLEAR"}


export const cartInitialState: CartState = {items:[]}


export function cartReducer(state:CartState, action:CartAction): CartState{
    switch(action.type){
        case "ADD":{
            const existing = state.items.find((item)=> item.id === action.payload.id)
            if(existing){
                return{
                    items: state.items.map((item)=> item.id === existing.id ? {...item, quantity: item.quantity + 1}: item)
                }
            }else{
                return{

                 items:[...state.items, {...action.payload, quantity: 1}]
                }
            }
        }
        case "DECREMENT":{
            return{
                items: state.items.map((item) => item.id === action.payload  ? {...item, quantity: item.quantity - 1}: item).filter((item)=> item.quantity > 0)
            }
        }
        case "REMOVE":{
            return {
                items: state.items.filter((item)=> item.id !== action.payload)
            }
        }
        case "LOAD":{
            return action.payload
        }
        
        case "CLEAR":{
            return cartInitialState
        }
        
        default: 
        return state
    }
}