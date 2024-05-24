import { Heading } from "@components/common";
import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import { Input } from "@components/Form";
import useLogin from "@hooks/useLogin";
import { Navigate } from "react-router-dom";

function Login() {
  const {
    searchParams,
    handleSubmit,
    submitForm,
    register,
    loading,
    formErrors,
    accessToken,
  } = useLogin();
  if (accessToken) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Heading title="Login" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") === "account_created" && (
            <Alert variant="success">
              Your account successfully created, Please login
            </Alert>
          )}
          {searchParams.get("message") === "login_required" && (
            <Alert variant="danger">Login Required , Please login</Alert>
          )}
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="Email Address"
              name="email"
              type="email"
              register={register}
              error={formErrors.email?.message}
            />

            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
              error={formErrors.password?.message}
            />
            <Button variant="info" type="submit" className="text-light">
              {loading === "pending" ? (
                <>
                  Loading... <Spinner animation="border" size="sm"></Spinner>
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Login;
