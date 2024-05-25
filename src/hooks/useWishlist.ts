import actGetWishlist from "@store/Wishlist/act/actGetWishlist";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { cleanWishlistProductFullInfo } from "@store/Wishlist/wishlistSlice";

const useWishlist = () => {
  const { itemsId, productsFullInfo, error, loading } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id as number],
    isLiked: true,
    isAuthenticated: true,
  }));

  useEffect(() => {
    const promise = dispatch(actGetWishlist("productsFullInfo"));
    return () => {
      promise.abort();
      dispatch(cleanWishlistProductFullInfo());
    };
  }, [dispatch]);
  return { itemsId, error, loading, records };
};

export default useWishlist;
