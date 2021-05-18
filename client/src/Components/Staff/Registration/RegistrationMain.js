import React, { useRef, useEffect } from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";
import "../../DrDashboard.css";
import LoginFooter from "../../MainComponents/LoginFooter";
import RegistrationMaintoAskIdReception from "../../MainComponents/RegistrationMaintoAskIdReception";
function RegistrationMain() {
  const refcontainer = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });

  return (
    <>
      <RegistrationMaintoAskIdReception />
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
          <div style={{ textAlign: "center", paddingBottom: "25px" }}>
            <h1 style={{ color: "white" }}>Registration Panel</h1>
          </div>
          <Container>
            <div>
              <Row>
                <Col xs="12" sm="12" md="12" lg="6" style={{ padding: "25px" }}>
                  <Link to="/PatientRegistrationTable">
                    <Button
                      id="tooltip256123867"
                      target="_blank"
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "50px",
                        backgroundColor: "Rgb(125,125,125,0.4)",
                        color: "white",
                      }}
                    >
                      <h6 style={{ color: "white" }}>Patient</h6>
                    </Button>
                  </Link>
                  <UncontrolledTooltip delay={0} target="tooltip256123867">
                    Register new Patient
                  </UncontrolledTooltip>
                </Col>

                <Col xs="12" sm="12" md="12" lg="6" style={{ padding: "25px" }}>
                  <Link to="/DrRegistrationTable">
                    <Button
                      id="tooltip356123837"
                      target="_blank"
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "50px",
                        backgroundColor: "Rgb(125,125,125,0.4)",
                        color: "white",
                      }}
                    >
                      <h6 style={{ color: "white" }}>Staff</h6>
                    </Button>
                  </Link>
                  <UncontrolledTooltip delay={0} target="tooltip356123837">
                    Register new Staff
                  </UncontrolledTooltip>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </main>
      <LoginFooter />
    </>
  );
}

export default RegistrationMain;
