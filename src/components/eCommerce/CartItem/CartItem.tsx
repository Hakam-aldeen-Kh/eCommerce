import { Form, Button } from "react-bootstrap";
import { TProduct } from "@types";
import { memo } from "react";
import ProductInfo from "../ProductInfo/ProductInfo";
import styles from "./styles.module.css";

const { cartItem, cartItemSelection } = styles;

type CartItemProp = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

const CartItem = memo(
  ({
    id,
    title,
    price,
    img,
    max,
    quantity,
    changeQuantityHandler,
    removeItemHandler,
  }: CartItemProp) => {
    const renderOptions = Array(max)
      .fill(0)
      .map((_, idx) => {
        const quantity = ++idx;
        return (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        );
      });

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const quantity = +event.target.value;
      changeQuantityHandler(id || 0, quantity);
    };
    // console.log("render");
    // console.log(renderOptions);
    return (
      <div className={cartItem}>
        <ProductInfo title={title} price={price} img={img} direction="column">
          <Button
            variant="secondary"
            style={{ color: "white", width: "100px" }}
            className="mt-auto btn-danger"
            onClick={() => {
              removeItemHandler(id as number);
            }}
          >
            Remove
          </Button>
        </ProductInfo>

        <div className={cartItemSelection}>
          <span className="d-block mb-1">Quantity</span>
          <Form.Select
            aria-label="Default select example"
            value={quantity}
            onChange={changeQuantity}
          >
            {renderOptions}
          </Form.Select>
        </div>
      </div>
    );
  }
);

export default CartItem;
