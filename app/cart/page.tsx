"use client";
import { useCart } from "../features/cart/cart.context";

const CartPage = () => {
  const { state, dispatch } = useCart();
  if (state.items.length === 0) {
    return <p>El carrito está vacío</p>;
  }

  return (
    <>
      <div>
        <h1>Carrito</h1>
        <button onClick={() => dispatch({ type: "CLEAR" })}>
          Vaciar carrito
        </button>
        {state.items.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail} alt="" />
            <p>{item.title}</p>
            <p>Cantidad: {item.quantity}</p>
            <button
              onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
            >
              Quitar
            </button>

            <button onClick={() => dispatch({ type: "ADD", payload: item })}>
              +
            </button>
            <button
              onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
            >
              -
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartPage;
