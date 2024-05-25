import Category from "@components/eCommerce/Category/Category";
import { Container } from "react-bootstrap";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import useCategories from "@hooks/useCategories";

function Categories() {
  const { error, loading, records } = useCategories();
  return (
    <Container>
      <Heading title="Categories" />
      <Loading states={loading} error={error} type="category">
        <GridList
          emptyMessage="There are no categories"
          records={records}
          type="category"
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
}

export default Categories;
