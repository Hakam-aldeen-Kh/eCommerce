import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetCategories,
  cleanCategoriesRecords,
} from "@store/Categories/categoriesSlice";

const useCategories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    const promise = dispatch(actGetCategories());
    return () => {
      promise.abort();
      dispatch(cleanCategoriesRecords());
    };
  }, [dispatch]);
  return { loading, error, records };
};

export default useCategories;
