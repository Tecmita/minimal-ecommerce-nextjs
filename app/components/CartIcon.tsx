"use client";

import { useCart } from "../features/cart/cart.context";

export default function CartIcon() {
  const { state } = useCart();

  const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);
  return <span>🛒{totalItems}</span>;
}
