import { GridList, Heading } from "@components/common";
import { TProduct } from "@types";
import { Loading } from "@components/feedback";
import { Product } from "@components/eCommerce";
import useWishlist from "@hooks/useWishlist";

function Wishlist() {
  const { error, loading, records } = useWishlist();
  return (
    <div>
      <Heading title="Your Wishlist" />
      <Loading states={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="Your Wishlist is empty"
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </div>
  );
}

export default Wishlist;
