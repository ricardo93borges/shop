import { useCart } from "@/context/cart/hooks";

export default function Cart() {
  const cart = useCart();

  return (
    <>
      <span>Total in cart: {cart.length} item(s)</span>
    </>
  );
}
