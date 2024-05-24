import ContentLoader from "react-content-loader";
import { Row, Col } from "react-bootstrap";

const ProductSkeleton = () => {
  const renderSkeletons = Array(4)
  .fill(0)
  .map((_, idx) => (
    <Col key={idx} sx={3} className="d-flex justify-content-center mb-5 mt-2">
      <ContentLoader
        speed={2}
        width={130}
        height={367}
        viewBox="0 0 130 367"
        backgroundColor="#ededed"
        foregroundColor="#fcfcfc"
      >
        <rect x="4" y="5" rx="0" ry="0" width="116" height="167" />
        <rect x="4" y="196" rx="3" ry="3" width="111" height="10" />
        <rect x="5" y="215" rx="3" ry="3" width="111" height="10" />
        <rect x="2" y="257" rx="3" ry="3" width="111" height="6" />
        <rect x="2" y="291" rx="3" ry="3" width="111" height="6" />
        <rect x="4" y="328" rx="6" ry="6" width="108" height="31" />
        <rect x="1" y="300" rx="3" ry="3" width="111" height="6" />
      </ContentLoader>
    </Col>
  ));
return <Row>{renderSkeletons}</Row>;
};

export default ProductSkeleton;
