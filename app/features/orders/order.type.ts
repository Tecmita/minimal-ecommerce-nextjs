import type { CartItem } from "../cart/cart.type";

export interface CustomerInfo {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
}
export interface Order{
    id: string;
    createdAt: string;
    customer: CustomerInfo;
    items: CartItem[];
    total: number;
    status: "confirmed";
}

