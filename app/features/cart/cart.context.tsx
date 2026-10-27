"use client";
import {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { cartReducer, cartInitialState, CartAction } from "./cart.reducer";
import { CartState } from "./cart.type";
import { getCart, savedCart } from "./cart.storage";

interface cartContextValue {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}
const CartContext = createContext<cartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const savedCart = getCart();

    if (savedCart) {
      dispatch({
        type: "LOAD",
        payload: savedCart,
      });
    }

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    savedCart(state);
  }, [state, isHydrated]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart tiene que ser usado dentro de un cartProvider");
  }
  return context;
}
