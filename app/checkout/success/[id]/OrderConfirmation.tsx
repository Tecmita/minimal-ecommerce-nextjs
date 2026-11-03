"use client";

import { useEffect, useState } from "react";
import { getOrderById } from "@/app/features/orders/order.storage";
import type { Order } from "@/app/features/orders/order.type";

interface OrderConfirmationProps {
  orderId: string;
}
export default function OrderConfirmation({ orderId }: OrderConfirmationProps) {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const storedOrder = getOrderById(orderId);

    if (storedOrder) {
      setOrder(storedOrder);
    }
  }, [orderId]);

  if (!order) {
    return <p>Orden no encontrada.</p>;
  }

  return (
    <main>
      <h1>¡Compra confirmada!</h1>

      <p>Orden: {order.id}</p>
      <p>Cliente: {order.customer.fullName}</p>

      <h2>Productos</h2>

      {order.items.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
          <p>Total: ${order.total.toFixed(2)}</p>
        </div>
      ))}
    </main>
  );
}
