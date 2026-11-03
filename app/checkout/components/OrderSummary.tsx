"use client";

import { useCart } from "@/app/features/cart/cart.context";
import { calculateOrderTotal } from "@/app/features/orders/order.utils";

export default function OrderSummary() {
  const { state } = useCart();

  return (
    <section>
      <h2>Resumen de tu compra</h2>
      {state.items.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        state.items.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price.toFixed(2)}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))
      )}
      <h3>Total: ${calculateOrderTotal(state.items).toFixed(2)}</h3>
    </section>
  );
}
