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
import LoginNavbar from "../MainComponents/LoginNavbar";
import LoginFooter from "../MainComponents/LoginFooter";

function ResetPassword(props) {
  const refcontainer = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });

  const [passwordIsValid, setPasswordIsValid] = useState(false);
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
      setErrorMessage(
        "Password must be of length 6 and must contain Uppercase"
      );
    }
  };

  const query = new URLSearchParams(props.location.search);
  const token = query.get("token");

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
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingTop: "50px",
                    }}
                  >
                    <span>Enter New Password</span>
                  </div>
                  <CardBody
                    style={{ backgroundColor: "rgb(128,0,0,0.4)" }}
                    className="px-lg-5 py-lg-5"
                  >
                    <Form
                      method="post"
                      action="http://localhost:3001/resetPassword"
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
                            placeholder="Enter Your New Password"
                            name="password"
                            type="password"
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

                        <InputGroup
                          style={{ display: "none" }}
                          className="input-group-alternative"
                        >
                          <Input name="token" type="text" value={token} />
                        </InputGroup>
                      </FormGroup>

                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="submit"
                          disabled={!passwordIsValid}
                        >
                          Change Password
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <LoginFooter />
    </>
  );
}

export default ResetPassword;
