import { TProduct } from "./products.types";

export type TOrderItem = {
  id: number;
  items: TProduct[];
  subtotal: number;
};
