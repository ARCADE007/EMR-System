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
function AskPatient() {
  const refcontainer = useRef(null);
  const [patientId, setPatientId] = useState();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });

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
                    <span>Enter Patient ID</span>
                  </div>
                  <CardBody
                    style={{ backgroundColor: "rgb(128,0,0,0.4)" }}
                    className="px-lg-5 py-lg-5"
                  >
                    <Form>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-circle-08" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Enter Patient Id"
                            name="id"
                            type="text"
                            value={patientId}
                            onChange={(e) => {
                              setPatientId(e.target.value);
                            }}
                          />
                        </InputGroup>
                        {/* <span
                          style={{
                            color: "lightgoldenrodyellow",
                          }}
                        >
                          {emailError}
                        </span> */}
                      </FormGroup>

                      <div className="text-center">
                        <Link to={`/DrDashboardStaff/${patientId}`}>
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            // disabled={!emailIsValid}
                          >
                            Go
                          </Button>
                        </Link>
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

export default AskPatient;
