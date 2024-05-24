import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetOrders, resetOrderState } from "@store/orders/ordersSlice";
import { TProduct } from "@types";

const useOrders = () => {
  const dispatch = useAppDispatch();

  const { loading, error, orderList } = useAppSelector((state) => state.orders);

  const [showModal, setShowModal] = useState(false);
  const [selectProduct, setSelectProduct] = useState<TProduct[]>([]);

  useEffect(() => {
    const promise = dispatch(actGetOrders());
    return () => {
      promise.abort();
      dispatch(resetOrderState());
    };
  }, [dispatch]);

  const viewDetailsHandler = (id: number) => {
    const productDetails = orderList.find((order) => order.id === id);
    setShowModal(true);
    const newItems = productDetails?.items || [];
    setSelectProduct((prev) => [...prev, ...newItems]);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setSelectProduct([]);
  };

  return {
    loading,
    error,
    showModal,
    closeModalHandler,
    selectProduct,
    viewDetailsHandler,
    orderList,
  };
};

export default useOrders;
