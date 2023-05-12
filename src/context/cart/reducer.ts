import { Product } from "@/models/Product";

export interface CartReducerAction {
  type: string;
  product: Product;
}

export enum CartReducerActions {
  ADD = "add",
  REMOVE = "remove",
}

export function cartReducer(cart: Product[], action: CartReducerAction) {
  const { type, product } = action;

  switch (type) {
    case CartReducerActions.ADD: {
      return [...cart, product];
    }
    case CartReducerActions.REMOVE: {
      const index = cart.findIndex((p) => p.id === product.id);

      if (index === -1) return cart;

      cart.splice(index, 1);

      return [...cart];
    }
    default: {
      throw new Error(`Unknown action: ${type}`);
    }
  }
}
