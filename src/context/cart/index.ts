import { Dispatch, createContext } from "react";
import { Product } from "@/models/Product";

export const CartContext = createContext<Product[]>([]);

// @ts-ignore
export const CartDispatchContext = createContext<Dispatch<any>>(null);
