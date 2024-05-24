import Product from "@components/eCommerce/Products/Product";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import { TProduct } from "@types";
import useProducts from "@hooks/useProducts";
function Products() {
  const { productPrefix, loading, error, productsFullInfo } = useProducts();
  return (
    <>
      <Heading title={`${productPrefix} Products`} />
      <Loading states={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="There are no categories"
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
}

export default Products;
