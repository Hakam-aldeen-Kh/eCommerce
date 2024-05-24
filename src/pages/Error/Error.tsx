import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LottieHandler } from "@components/feedback";
import styles from "./styles.module.css";
const { errorContainer, errorLink } = styles;

function Error() {
  return (
    <Container className={errorContainer}>
      <div className="d-flex flex-column align-items-center">
        <LottieHandler
          type="notFound"
          message="It's Not Found, Please press button to go to home page"
        />
        <Link to="/" replace={true} className={errorLink}>
          <Button variant="primary">Go to Homepage</Button>
        </Link>
      </div>
    </Container>
  );
}

export default Error;
