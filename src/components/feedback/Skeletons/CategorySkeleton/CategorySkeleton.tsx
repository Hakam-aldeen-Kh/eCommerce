import ContentLoader from "react-content-loader";
import { Row, Col } from "react-bootstrap";

const CategorySkeleton = () => {
  const renderSkeletons = Array(4)
    .fill(0)
    .map((_, idx) => (
      <Col key={idx} sx={3} className="d-flex justify-content-center mb-5 mt-2">
        <ContentLoader
          speed={2}
          width={200}
          height={200}
          viewBox="0 0 200 200"
          backgroundColor="#ededed"
          foregroundColor="#fcfcfc"
        >
          <circle cx="83" cy="85" r="83" />
          <rect x="31" y="184" rx="3" ry="3" width="100" height="6" />
        </ContentLoader>
      </Col>
    ));
  return <Row>{renderSkeletons}</Row>;
};
export default CategorySkeleton;
