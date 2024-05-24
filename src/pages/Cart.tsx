import { Heading } from "@components/common";
import { CartItemsList, CartSubTotalPrice } from "@components/eCommerce";
import { Loading, LottieHandler } from "@components/feedback";
import useCart from "@hooks/useCart";

function Cart() {
  const {
    loading,
    error,
    products,
    productsFullInfo,
    changeQuantityHandler,
    userAccessToken,
    removeItemHandler,
    placeOrderStatus,
  } = useCart();
  return (
    <div>
      <Heading title="Cart" />
      <Loading states={loading} error={error} type="cart">
        {productsFullInfo.length ? (
          <>
            <CartItemsList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartSubTotalPrice
              products={products}
              userAccessToken={userAccessToken}
            />
          </>
        ) : placeOrderStatus == "succeeded" ? (
          <LottieHandler
            type="success"
            message="Your order has been placed successfully"
          />
        ) : (
          <LottieHandler type="empty" message="Your cart is empty" />
        )}
      </Loading>
    </div>
  );
}

export default Cart;
