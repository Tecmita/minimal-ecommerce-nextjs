import type { Order } from "./order.type";

const ORDERS_STORAGE_KEY = "customer-orders"

export function saveOrder(order: Order): void{
    const orders = getOrders()
    
    const updatedOrders = [...orders, order]

    localStorage.setItem(
        ORDERS_STORAGE_KEY, JSON.stringify(updatedOrders)
    )
}


export function getOrders(): Order[]{
    const storedOrders = localStorage.getItem(ORDERS_STORAGE_KEY)
    if(!storedOrders){
        return []
    }
    try{
        return JSON.parse(storedOrders) as Order[];
    }catch{
        return []
    }
}


export function getOrderById(id: string): Order | undefined {
    const orders = getOrders();
    return orders.find((order)=> order.id === id)
}
