import { LottieHandler } from "@components/feedback";
import { Row, Col } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => JSX.Element;
  emptyMessage: string;
};

const GridList = <T extends { id?: number }>({
  emptyMessage,
  records,
  renderItem,
}: GridListProps<T>) => {
  const renderList =
    records.length > 0 ? (
      records.map((record) => (
        <Col
          key={record.id}
          xs={12} // For extra small devices (≤576px), each item will take the full width
          sm={6} // For small devices (≥576px), each item will take half the width
          md={4} // For medium devices (≥768px), each item will take one-third of the width
          lg={3} // For large devices (≥992px), each item will take one-fourth of the width
          className="d-flex justify-content-center mb-5 mt-2"
        >
          {renderItem(record)}
        </Col>
      ))
    ) : (
      <LottieHandler type="empty" message={emptyMessage} />
    );

  return <Row>{renderList}</Row>;
};

export default GridList;
