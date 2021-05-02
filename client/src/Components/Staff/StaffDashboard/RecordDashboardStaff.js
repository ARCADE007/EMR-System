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
import RecordDashboardStafftoDrDashboardStaff from "../../MainComponents/RecordDashboardStafftoDrDashboardStaff";
import "../../DrDashboard.css";
import { useParams, Link } from "react-router-dom";

function RecordDashboardStaff() {
  const { patientId } = useParams();
  const refcontainer = useRef(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    axios
      .get("http://localhost:3001/records/" + patientId, {
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
      <RecordDashboardStafftoDrDashboardStaff
        patientId={patientId}
      />
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
          <div className="Patient__Record">
            <Row>
              <Col xs="12" sm="12" md="6" lg="6">
                <h1 style={{ color: "white" }}>Records</h1>
              </Col>
              <Col
                xs="12"
                sm="12"
                md="6"
                lg="6"
                style={{ paddingTop: "5px" }}
              >
                <Link to={`/AddRecord/${patientId}`}>
                  <Button>New Record</Button>
                </Link>
              </Col>
            </Row>
            <Container style={{ padding: "2% 15%" }}>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                ></input>
              </Col>
            </Container>
          </div>
          <Container>
            <div>
              <Row>
                {data.map((record, index) => {
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
                        style={{
                          backgroundColor:
                            "Rgb(125,125,125,0.5)",
                        }}
                      >
                        <CardTitle
                          style={{ color: "white" }}
                          tag="h5"
                        >
                          {record.recordName}
                        </CardTitle>
                        <Link
                          to={`/ReportStaff/${patientId}/${record.recordId}/${record.recordName}`}
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

export default RecordDashboardStaff;
