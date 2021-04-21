import React, { useRef, useEffect, useState } from "react";
import validator from "validator";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import LoginNavbar from "../MainComponents/LoginNavbar";
import LoginFooter from "../MainComponents/LoginFooter";

function Login() {
  const refcontainer = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailIsValid(true);
      setEmailError("Valid Email :)");
    } else {
      setEmailIsValid(false);
      setEmailError("Enter valid Email!");
    }
  };
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      setPasswordIsValid(true);
      setErrorMessage("Is Strong Password");
    } else {
      setPasswordIsValid(false);
      setErrorMessage("Is Not Strong Password");
    }
  };

  return (
    <>
      <LoginNavbar />
      <main ref={refcontainer}>
        <section
          style={{ backgroundColor: "rgb(128,0,0,0.6)" }}
          className="section section-shaped section-lg"
        >
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <div
                    style={{
                      backgroundColor: "rgb(128,0,0,0.4)",
                      textAlign: "center",
                      paddingTop: "50px",
                      fontWeight: "bold",
                    }}
                  >
                    <span>Sign in with your credentials</span>
                  </div>
                  <CardBody
                    style={{
                      backgroundColor: "rgb(128,0,0,0.4)",
                    }}
                    className="px-lg-5 py-lg-5"
                  >
                    <Form
                      method="post"
                      action="http://localhost:3001/authenticate"
                      role="form"
                    >
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="patientId"
                            placeholder="Email"
                            type="text"
                            //   onChange={(e) => validateEmail(e)}
                          />
                        </InputGroup>
                        <span
                          style={{
                            color: "lightblue",
                          }}
                        >
                          {emailError}
                        </span>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="password"
                            placeholder="Password"
                            type="text"
                            autoComplete="off"
                            onChange={(e) => validate(e.target.value)}
                          />
                        </InputGroup>
                        <span
                          style={{
                            color: "lightblue",
                          }}
                        >
                          {errorMessage}
                        </span>
                      </FormGroup>

                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="submit"
                          disabled={!passwordIsValid}
                        >
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <Row className="mt-3">
                  <Col xs="6">
                    <Link to="/ForgotPass" className="text-light">
                      <small>Forgot password?</small>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <LoginFooter />
    </>
  );
}

export default Login;
