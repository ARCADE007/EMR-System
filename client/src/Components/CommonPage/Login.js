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
  Label,
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

  const [idIsValid, setIdIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [idError, setIdError] = useState("");
  const validateId = (e) => {
    var id = e.target.value;

    if (validator.isNumeric(id)) {
      setIdIsValid(true);
      setIdError("");
    } else {
      setIdIsValid(false);
      setIdError("Enter valid Id ");
    }
  };
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 6,
        minLowercase: 0,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      setPasswordIsValid(true);
      setErrorMessage("");
    } else {
      setPasswordIsValid(false);
      setErrorMessage("Enter valid Password");
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
                              <i className="ni ni-circle-08" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="id"
                            placeholder="Id"
                            type="text"
                            onChange={(e) => validateId(e)}
                          />
                        </InputGroup>
                        <span
                          style={{
                            color: "lightblue",
                          }}
                        >
                          {idError}
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
                            type="password"
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

                      <FormGroup tag="fieldset">
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          Select Role
                        </span>
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="radio"
                              name="role"
                              value="patient"
                              defaultChecked
                            />{" "}
                            Patient
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" value="staff" name="role" />{" "}
                            Staff
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" value="reception" name="role" />{" "}
                            Reception
                          </Label>
                        </FormGroup>
                      </FormGroup>

                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="submit"
                          disabled={!(passwordIsValid && idIsValid)}
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
