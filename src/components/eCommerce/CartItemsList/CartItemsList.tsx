import { TProduct } from "@types";
import CartItem from "../CartItem/CartItem";

type CartItemsListProps = {
  products: TProduct[];
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

function CartItemsList({
  products,
  changeQuantityHandler,
  removeItemHandler,
}: CartItemsListProps) {
  const renderList = products.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQuantityHandler={changeQuantityHandler}
      removeItemHandler={removeItemHandler}
    />
  ));
  return <div>{renderList}</div>;
}

export default CartItemsList;
