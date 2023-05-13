import { useCart, useCartDispatch } from "@/context/cart/hooks";
import { CartReducerActions } from "@/context/cart/reducer";
import { Product } from "@/models/Product";

export interface ItemModalContentProps {
  product?: Product;
}

export default function ItemModalContent({ product }: ItemModalContentProps) {
  const cart = useCart();
  const dispatch = useCartDispatch();

  const add = () => {
    const { name, quantity } = product!;
    const total = count();

    if (total === quantity) {
      alert(
        `There is no more ${name} available in stock. Quantity: ${quantity}`
      );
      return;
    }

    dispatch({
      type: CartReducerActions.ADD,
      product,
    });
  };

  const remove = () => {
    dispatch({
      type: CartReducerActions.REMOVE,
      product,
    });
  };

  const count = () => {
    return cart.reduce((count, { id }) => {
      return id === product!.id ? count + 1 : count;
    }, 0);
  };

  if (!product) return <></>;

  return (
    <>
      <div className="columns">
        <div className="column is-7">
          <h1 className="is-size-3">{product.name}</h1>
        </div>
        <div className="column is-3">
          <h1 className="is-size-3 has-text-centered">
            $ {product.price / 10}
          </h1>
        </div>
        <div className="column is-2">
          <h1 className="is-size-3 has-text-centered">{product.quantity}</h1>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <p>{product.description}</p>
        </div>
      </div>
      <div className="columns">
        <div className="column is-5">
          <p>
            <b>This item in cart:</b> {count()}
          </p>
        </div>
        <div className="column is-7">
          <button
            className="button is-primary mr-1 is-pulled-right"
            onClick={() => add()}
          >
            Add to cart
          </button>
          <button
            className="button is-warning mr-1 is-pulled-right"
            onClick={() => remove()}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </>
  );
}
