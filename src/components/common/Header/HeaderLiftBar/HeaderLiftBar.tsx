import Styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";
import WishlistLogo from "@assets/svg/wishlist.svg?react";
import CartLogo from "@assets/svg/cart.svg?react";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import HeaderCounter from "../HeaderCounter/HeaderCounter";

const { headerLiftBar } = Styles;
function HeaderLiftBar() {
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);
  return (
    <div className={headerLiftBar}>
      <HeaderCounter
        title="Wishlist"
        page="/wishlist"
        totalQuantity={wishlistTotalQuantity}
        svgIcon={<WishlistLogo title="wishlist" />}
      />
      <HeaderCounter
        title="Cart"
        page="/cart"
        totalQuantity={cartTotalQuantity}
        svgIcon={<CartLogo title="cart" />}
      />
    </div>
  );
}

export default HeaderLiftBar;
