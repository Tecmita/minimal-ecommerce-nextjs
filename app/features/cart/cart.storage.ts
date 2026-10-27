import { CartState } from "./cart.type";


const CART_STORAGE_KEY = "shopping-cart"


export function savedCart(state:CartState): void{
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state))
}

export function getCart(): CartState | null {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY)
    if(!storedCart){
        return null
    }else{
        return JSON.parse(storedCart)
    }
}

export function ClearCartStorage(): void{
    localStorage.removeItem(CART_STORAGE_KEY)
}