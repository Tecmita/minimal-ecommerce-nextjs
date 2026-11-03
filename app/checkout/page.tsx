import CheckoutForm from "./components/CheckoutForm";
import OrderSummary from "./components/OrderSummary";

export default function CheckoutPage() {
  return (
    <main>
      <h1>Checkout</h1>
      <OrderSummary />
      <CheckoutForm />
    </main>
  );
}
