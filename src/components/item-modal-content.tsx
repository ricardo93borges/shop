import { Product } from "@/models/Product";

export interface ItemModalContentProps {
  product?: Product;
}

export default function ItemModalContent({ product }: ItemModalContentProps) {
  if (!product) return <></>;

  return (
    <>
      <div className="columns">
        <div className="column is-8">
          <h1 className="is-size-3">{product.name}</h1>
        </div>
        <div className="column is-2">
          <h1 className="is-size-3 has-text-centered">{product.price}</h1>
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
            <b>This item in cart:</b> 1
          </p>
        </div>
        <div className="column is-7">
          <button className="button is-primary mr-1 is-pulled-right">
            Add to cart
          </button>
          <button className="button is-warning mr-1 is-pulled-right">
            Remove from cart
          </button>
        </div>
      </div>
    </>
  );
}
