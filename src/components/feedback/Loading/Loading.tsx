import CategorySkeleton from "../Skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../Skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "../Skeletons/CartSkeleton/CartSkeleton";
import { TLoading } from "@types";
import LottieHandler from "../LottieHandler/LottieHandler";
import TableSkeleton from "../Skeletons/TableSkeleton/TableSkeleton";

const skeletonsTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
  table: TableSkeleton,
};

interface LoadingProps {
  states: TLoading;
  error: string | null;
  children: React.ReactNode;
  type: keyof typeof skeletonsTypes;
}

function Loading({ states, error, children, type }: LoadingProps) {
  const Component = skeletonsTypes[type];
  if (states === "pending") {
    return <Component />;
  }
  if (states === "failed") {
    return <LottieHandler type="error" message={error as string} />;
    // return { error };
  }
  return <>{children}</>;
}

export default Loading;
