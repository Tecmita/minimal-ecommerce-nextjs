"use client";

import { useCart } from "@/app/features/cart/cart.context";
import { Product } from "@/app/types/Product";

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD",
      payload: product,
    });
  };
  return (
    <button
      onClick={handleAddToCart}
      className="mt-4 text-white bg-purple-600 px-3 py-1 rounded md"
    >
      Agregar al carrito
    </button>
  );
}
