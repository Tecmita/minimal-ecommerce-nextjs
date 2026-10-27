"use client";

import { useCart } from "@/app/features/cart/cart.context";

export default function CartIndicator() {
  const { state } = useCart();

  const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return <span>🛒 {totalItems}</span>;
}
