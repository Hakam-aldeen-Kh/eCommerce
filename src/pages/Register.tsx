import { Heading } from "@components/common";
import { Input } from "@components/Form";
import useRegister from "@hooks/useRegister";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
function Register() {
  const {
    handleSubmit,
    submitForm,
    register,
    formErrors,
    emailOnBlurHandler,
    emailAvailabilityStatus,
    loading,
    accessToken,
  } = useRegister();
  if (accessToken) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Heading title="User Registration" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="First Name"
              name="firstName"
              register={register}
              error={formErrors.firstName?.message}
            />

            <Input
              label="Last Name"
              name="lastName"
              register={register}
              error={formErrors.lastName?.message}
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              register={register}
              onBlur={emailOnBlurHandler}
              error={
                formErrors.email?.message
                  ? formErrors.email?.message
                  : emailAvailabilityStatus === "notAvailable"
                  ? "This email is already in use."
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server"
                  : ""
              }
              formText={
                emailAvailabilityStatus === "checking"
                  ? "We're currently checking the availability of this email address. Please wait a moment."
                  : ""
              }
              success={
                emailAvailabilityStatus === "available"
                  ? "This email is available for use"
                  : ""
              }
              disabled={emailAvailabilityStatus === "checking" && true}
            />

            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
              error={formErrors.password?.message}
            />

            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              register={register}
              error={formErrors.confirmPassword?.message}
            />

            <Button
              variant="info"
              type="submit"
              className="text-light"
              disabled={
                emailAvailabilityStatus === "checking" ||
                emailAvailabilityStatus === "notAvailable" ||
                formErrors.email?.message
                  ? true
                  : false || loading === "pending"
              }
            >
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

export default Register;
