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
function AskPatientReception() {
  const refcontainer = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });
  const [idIsValid, setIdIsValid] = useState(false);
  const [idError, setIdError] = useState("");
  const validateId = (e) => {
    var id = e.target.value;

    if (validator.isNumeric(id)) {
      setIdIsValid(true);
      setIdError("Valid Id");
    } else {
      setIdIsValid(false);
      setIdError("Enter valid Id ");
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
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingTop: "50px",
                    }}
                  >
                    <span>Enter User ID</span>
                  </div>
                  <CardBody
                    style={{ backgroundColor: "rgb(128,0,0,0.4)" }}
                    className="px-lg-5 py-lg-5"
                  >
                    <Form method="post" action="" role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-circle-08" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="id"
                            placeholder="User Id"
                            type="text"
                            onChange={(e) => validateId(e)}
                          />
                        </InputGroup>
                        <span
                          style={{
                            color: "lightgoldenrodyellow",
                          }}
                        >
                          {idError}
                        </span>
                      </FormGroup>
                      <Row className="mt-3">
                        <Col xs="12">
                          <Link to="/Registration" className="text-light">
                            <p>For New Registration</p>
                          </Link>
                        </Col>
                      </Row>

                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="submit"
                          disabled={!idIsValid}
                        >
                          Go
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

export default AskPatientReception;
