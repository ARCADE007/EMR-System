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
import LoginNavbar from "../../MainComponents/LoginNavbar";
import LoginFooter from "../../MainComponents/LoginFooter";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function AddRecord() {
  const { patientId } = useParams();
  const refcontainer = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });
  const [recordNameIsValid, setRecordNameIsValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const AddRecord = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 1,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      setRecordNameIsValid(true);
      setErrorMessage("");
    } else {
      setRecordNameIsValid(false);
      setErrorMessage("Enter Valid Record Name");
    }
  };

  return (
    <>
      <LoginNavbar />
      <main ref={refcontainer}>
        <section className="section section-shaped section-lg">
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
                      backgroundColor: "Rgb(125,125,125,0.6)",
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingTop: "50px",
                    }}
                  >
                    <span>Enter Card Details</span>
                  </div>
                  <CardBody
                    style={{ backgroundColor: "Rgb(125,125,125,0.6)" }}
                    className="px-lg-5 py-lg-5"
                  >
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        axios
                          .post(`http://localhost:3001/records`, {
                            patientId: patientId,
                            recordName: e.target.recordName.value,
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                        window.location.href = `/RecordDashboardStaff/${patientId}`;
                      }}
                    >
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-ruler-pencil" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Enter Record Name"
                            name="recordName"
                            type="text"
                            onChange={(e) => AddRecord(e.target.value)}
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
                        {/* <Link to={`/RecordDashboardStaff/${patientId}`}> */}
                        <Button
                          className="my-4"
                          color="primary"
                          type="submit"
                          disabled={!recordNameIsValid}
                        >
                          Save
                        </Button>
                        {/* </Link> */}
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

export default AddRecord;
