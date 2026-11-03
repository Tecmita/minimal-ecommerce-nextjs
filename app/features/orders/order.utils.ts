import type { CartItem } from "../cart/cart.type"; 


export function calculateOrderTotal(items:CartItem[]): number{
    return items.reduce(
        (total, item) => total + item.price * item.quantity, 0
    )
}

export function generateOrderId(): string{
    return `ORD-${Date.now()}`;
}