import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Button, Card, Container, Row, Col, CardTitle } from "reactstrap";
import LoginNavbar from "../../MainComponents/LoginNavbar";
import LoginFooter from "../../MainComponents/LoginFooter";
import { Link } from "react-router-dom";
import "../../DrDashboard.css";

function RecordDashboardPatient() {
  const refcontainer = useRef(null);
  const [data, setData] = useState([]);
  const [actualData, setActualData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setData(actualData);
      return;
    }
    const newData = actualData.filter((record) => {
      return (
        record.recordName.toLowerCase().search(searchTerm.toLowerCase()) !== -1
      );
    });
    setData(newData);
  }, [actualData, searchTerm]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    axios
      .get("http://localhost:3001/records/" + Cookies.get("id"), {
        withCredentials: true,
      })
      .then((result) => {
        setData(result.data);
        setActualData(result.data);
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
                <h1 style={{ color: "white" }}>My Records</h1>
              </Col>
              <Col
                xs="12"
                sm="12"
                md="6"
                lg="6"
                style={{
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                <Link to="/DrDashboardPatient">
                  <Button>View Prescriptions</Button>
                </Link>
              </Col>
            </Row>
            <Container style={{ padding: "0 20%" }}>
              <Col>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleChange}
                ></input>
              </Col>
            </Container>
          </div>
          <Container style={{ paddingTop: "10px" }}>
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
                          background: "rgb(255,255,255,0.2)",
                        }}
                      >
                        <CardTitle style={{ color: "white" }} tag="h5">
                          {record.recordName}
                        </CardTitle>

                        <Link
                          to={`/ReportPatient/${record.recordId}/${record.recordName}`}
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

export default RecordDashboardPatient;
