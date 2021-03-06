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
import LoginFooter from "../../MainComponents/LoginFooter";
import "../../DrDashboard.css";
import { useParams, Link } from "react-router-dom";
import DrDashboardStafftoRecordDashboardStaff from "../../MainComponents/DrDashboardStafftoRecordDashboardStaff";
import Cookies from "js-cookie";
function DrDashboardStaff() {
  const { patientId } = useParams();
  const refcontainer = useRef(null);
  const [data, setData] = useState([]);
  const [actualData, setActualData] = useState([]);
  const [staffName, setStaffName] = useState("");
  const [newPrescription, setNewPrescription] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    axios
      .get("http://localhost:3001/patients/prescription/" + patientId, {
        withCredentials: true,
      })
      .then((result) => {
        setData(result.data);
        setActualData(result.data);
        const exist = result.data.filter((staff) => {
          return staff.staffId === Cookies.get("id");
        });
        setNewPrescription(!exist.length);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setNewPrescription(true);
        }
        console.error(err);
      });
    axios
      .get(`http://localhost:3001/staffs/${Cookies.get("id")}`, {
        withCredentials: true,
      })
      .then((res) => {
        setStaffName(res.data.staffName);
      });
  }, [patientId]);

  useEffect(() => {
    if (searchTerm === "") {
      setData(actualData);
      return;
    }
    const newData = actualData.filter((doctor) => {
      return (
        doctor.staffName.toLowerCase().search(searchTerm.toLowerCase()) !==
          -1 ||
        doctor.departmentName.toLowerCase().search(searchTerm.toLowerCase()) !==
          -1
      );
    });
    setData(newData);
  }, [searchTerm, actualData]);

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
              {newPrescription && (
                <Col
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  style={{ paddingTop: "5px" }}
                >
                  <Button
                    onClick={() => {
                      window.location.href = `/PrescriptionMain/${patientId}/${Cookies.get(
                        "id"
                      )}/${staffName}`;
                    }}
                  >
                    New Prescription
                  </Button>
                </Col>
              )}
            </Row>
            <Container style={{ padding: "2% 15%" }}>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleChange}
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
                        style={{
                          backgroundColor: "Rgb(255,255,255,0.2)",
                        }}
                      >
                        <CardTitle style={{ color: "white" }} tag="h5">
                          {prescription.staffName}
                        </CardTitle>
                        <CardText>{prescription.departmentName}</CardText>

                        <Link
                          to={`/PrescriptionMain/${patientId}/${prescription.staffId}/${prescription.staffName}`}
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
