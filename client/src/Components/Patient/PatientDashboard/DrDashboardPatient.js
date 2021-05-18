import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  CardText,
  CardTitle,
} from "reactstrap";
import Cookies from "js-cookie";
import LoginNavbar from "../../MainComponents/LoginNavbar";
import LoginFooter from "../../MainComponents/LoginFooter";
import { Link } from "react-router-dom";
import "../../DrDashboard.css";
function DrDashboardPatient() {
  const refcontainer = useRef(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    axios
      .get("http://localhost:3001/patients/prescription/" + Cookies.get("id"), {
        withCredentials: true,
      })
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <LoginNavbar />
      <main ref={refcontainer}>
        <section
          style={{ backgroundColor: "rgb(0,100,0,0.6)" }}
          className="Custom_heading section section-shaped section-lg"
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
          <div className="Patient__Record">
            <Row>
              <Col xs="12" sm="12" md="6" lg="6">
                <h1 style={{ color: "white" }}>Prescription</h1>
              </Col>
              <Col
                xs="12"
                sm="12"
                md="6"
                lg="6"
                style={{ paddingTop: "5px", paddingBottom: "5px" }}
              >
                <Link to="/RecordDashboardPatient">
                  <Button>View Records</Button>
                </Link>
              </Col>
            </Row>
            <Container style={{ padding: "0 20%" }}>
              <Col>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                ></input>
              </Col>
            </Container>
          </div>
          <Container style={{ paddingTop: "10px" }}>
            <div>
              <Row>
                {data.map((prescription, index) => {
                  return (
                    <Col
                      key={index}
                      xs="12"
                      sm="6"
                      md="4"
                      lg="3"
                      className="Card__Padding"
                    >
                      <Card
                        body
                        inverse
                        style={{ background: "rgb(255,255,255,0.2)" }}
                      >
                        <CardTitle style={{ color: "white" }} tag="h5">
                          {prescription.staffName}
                        </CardTitle>
                        <CardText style={{ color: "white" }}>
                          {prescription.departmentName}
                        </CardText>
                        <Link
                          to={`/PrescriptionMainPatient/${prescription.staffId}/${prescription.staffName}`}
                        >
                          <Button type="submit">View</Button>
                        </Link>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </section>
      </main>
      <LoginFooter />
    </>
  );
}

export default DrDashboardPatient;
