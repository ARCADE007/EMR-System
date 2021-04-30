import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  CardText,
  CardTitle,
} from "reactstrap";
import LoginFooter from "../../MainComponents/LoginFooter";
import "../../DrDashboard.css";
import { useParams, Link } from "react-router-dom";
import DrDashboardStafftoRecordDashboardStaff from "../../MainComponents/DrDashboardStafftoRecordDashboardStaff";
function DrDashboardStaff() {
  const { patientId } = useParams();
  const refcontainer = useRef(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    axios
      .get("http://localhost:3001/patients/prescription/" + patientId, {
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
      <DrDashboardStafftoRecordDashboardStaff patientId={patientId} />
      <main ref={refcontainer}>
        <section className="Custom_heading section section-shaped section-lg">
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
              <Col xs="12" sm="12" md="6" lg="6" style={{ paddingTop: "5px" }}>
                <Link to="/AddDr">
                  <Button>New Prescription</Button>
                </Link>
              </Col>
            </Row>
            <Container style={{ padding: "2% 15%" }}>
              <Col>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                ></input>
              </Col>
            </Container>
          </div>
          <Container>
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
                        style={{ backgroundColor: "Rgb(255,255,255,0.2)" }}
                      >
                        <CardTitle style={{ color: "white" }} tag="h5">
                          {prescription.staffName}
                        </CardTitle>
                        <CardText>{prescription.departmentName}</CardText>

                        <Link
                          to={"/PrescriptionTableMain/" + prescription.staffId}
                        >
                          <Button>View</Button>
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

export default DrDashboardStaff;
