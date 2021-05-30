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
function ForgotPass() {
  const refcontainer = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });

  //   const [emailIsValid, setEmailIsValid] = useState(false);

  //   const [emailError, setEmailError] = useState("");
  //   const validateEmail = (e) => {
  //     var email = e.target.value;

  //     if (validator.isEmail(email)) {
  //       setEmailIsValid(true);
  //       setEmailError("Valid Email");
  //     } else {
  //       setEmailIsValid(false);
  //       setEmailError("Enter valid Email!");
  //     }
  //   };

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
                    <span>Enter Your Id</span>
                  </div>
                  <CardBody
                    style={{ backgroundColor: "rgb(128,0,0,0.4)" }}
                    className="px-lg-5 py-lg-5"
                  >
                    <Form
                      method="post"
                      action="http://localhost:3001/forgotPassword"
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
                            placeholder="Enter Your Id"
                            name="id"
                            type="string"
                            // onChange={(e) => validateEmail(e)}
                          />
                        </InputGroup>
                        <FormGroup style={{ paddingTop: "15px" }} check>
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

                        {/* <span
                          style={{
                            color: "lightblue",
                          }}
                        >
                          {emailError}
                        </span> */}
                      </FormGroup>

                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="submit"
                          //   disabled={!emailIsValid}
                        >
                          Send Email
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

export default ForgotPass;
