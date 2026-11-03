"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/features/cart/cart.context";
import {
  generateOrderId,
  calculateOrderTotal,
} from "@/app/features/orders/order.utils";
import type { CustomerInfo, Order } from "@/app/features/orders/order.type";
import { saveOrder } from "@/app/features/orders/order.storage";

export default function CheckoutForm() {
  const router = useRouter();
  const { state, dispatch } = useCart();
  const [customer, setCustomer] = useState<CustomerInfo>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state.items.length === 0) {
      return;
    }

    const order: Order = {
      id: generateOrderId(),
      createdAt: new Date().toISOString(),
      customer,
      items: state.items.map((item) => ({ ...item })),
      total: calculateOrderTotal(state.items),
      status: "confirmed",
    };
    saveOrder(order);
    console.log(order);
    dispatch({ type: "CLEAR" });
    router.push(`/checkout/success/${order.id}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Nombre Completo</label>
      <input
        required
        id="fullName"
        name="fullName"
        type="text"
        value={customer.fullName}
        onChange={(event) =>
          setCustomer({ ...customer, fullName: event.target.value })
        }
      />
      <label htmlFor="email">Email</label>
      <input
        required
        id="email"
        name="email"
        type="email"
        value={customer.email}
        onChange={(event) =>
          setCustomer({ ...customer, email: event.target.value })
        }
      />
      <label htmlFor="phone">Phone</label>
      <input
        required
        id="phone"
        name="phone"
        type="text"
        value={customer.phone}
        onChange={(event) =>
          setCustomer({ ...customer, phone: event.target.value })
        }
      />
      <label htmlFor="address">Address</label>

      <input
        required
        id="address"
        name="address"
        type="text"
        value={customer.address}
        onChange={(event) =>
          setCustomer({ ...customer, address: event.target.value })
        }
      />
      <label htmlFor="city">City</label>

      <input
        required
        id="city"
        name="city"
        type="text"
        value={customer.city}
        onChange={(event) =>
          setCustomer({ ...customer, city: event.target.value })
        }
      />
      <label htmlFor="postalCode">Postal Code</label>

      <input
        required
        id="postalCode"
        name="postalCode"
        type="text"
        value={customer.postalCode}
        onChange={(event) =>
          setCustomer({ ...customer, postalCode: event.target.value })
        }
      />

      <button type="submit">Continuar</button>
    </form>
  );
}
