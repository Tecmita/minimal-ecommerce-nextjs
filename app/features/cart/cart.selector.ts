import { CartState } from "./cart.type";

export const getTotalItems = (state: CartState) =>
  state.items.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalPrice = (state: CartState) =>
  state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );



