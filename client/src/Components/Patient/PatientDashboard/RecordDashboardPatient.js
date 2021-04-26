import React, { useRef, useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  CardText,
  CardTitle,
} from "reactstrap";
import LoginNavbar from "../../MainComponents/LoginNavbar";
import LoginFooter from "../../MainComponents/LoginFooter";
import { Link } from "react-router-dom";
import "../../DrDashboard.css";
function RecordDashboardPatient() {
  const refcontainer = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });
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
                <h1 style={{ color: "white" }}>Records</h1>
              </Col>
              <Col
                xs="12"
                sm="12"
                md="6"
                lg="6"
                style={{ paddingTop: "5px", paddingBottom: "5px" }}
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
                ></input>
              </Col>
            </Container>
          </div>
          <Container style={{ paddingTop: "10px" }}>
            <div>
              <Row>
                <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                  <Card
                    body
                    inverse
                    style={{ background: "rgb(255,255,255,0.2)" }}
                  >
                    <CardTitle style={{ color: "white" }} tag="h5">
                      Special Title Treatment
                    </CardTitle>
                    <CardText style={{ color: "white" }}>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Button</Button>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                  <Card
                    body
                    inverse
                    style={{ background: "rgb(255,255,255,0.2)" }}
                  >
                    <CardTitle style={{ color: "black" }} tag="h5">
                      Special Title Treatment
                    </CardTitle>
                    <CardText style={{ color: "black" }}>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Button</Button>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                  <Card
                    body
                    inverse
                    style={{ background: "rgb(255,255,255,0.2)" }}
                  >
                    <CardTitle style={{ color: "black" }} tag="h5">
                      Special Title Treatment
                    </CardTitle>
                    <CardText style={{ color: "black" }}>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Button</Button>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                  <Card
                    body
                    inverse
                    style={{ background: "rgb(255,255,255,0.2)" }}
                  >
                    <CardTitle style={{ color: "black" }} tag="h5">
                      Special Title Treatment
                    </CardTitle>
                    <CardText style={{ color: "black" }}>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Button</Button>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                  <Card
                    body
                    inverse
                    style={{ background: "rgb(255,255,255,0.2)" }}
                  >
                    <CardTitle style={{ color: "black" }} tag="h5">
                      Special Title Treatment
                    </CardTitle>
                    <CardText style={{ color: "black" }}>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Button</Button>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                  <Card
                    body
                    inverse
                    style={{ background: "rgb(255,255,255,0.2)" }}
                  >
                    <CardTitle style={{ color: "black" }} tag="h5">
                      Special Title Treatment
                    </CardTitle>
                    <CardText style={{ color: "black" }}>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Button</Button>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                  <Card
                    body
                    inverse
                    style={{ background: "rgb(255,255,255,0.2)" }}
                  >
                    <CardTitle style={{ color: "black" }} tag="h5">
                      Special Title Treatment
                    </CardTitle>
                    <CardText style={{ color: "black" }}>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Button</Button>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                  <Card
                    body
                    inverse
                    style={{ background: "rgb(255,255,255,0.2)" }}
                  >
                    <CardTitle style={{ color: "black" }} tag="h5">
                      Special Title Treatment
                    </CardTitle>
                    <CardText style={{ color: "black" }}>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Button</Button>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                  <Card
                    body
                    inverse
                    style={{ background: "rgb(255,255,255,0.2)" }}
                  >
                    <CardTitle style={{ color: "black" }} tag="h5">
                      Special Title Treatment
                    </CardTitle>
                    <CardText style={{ color: "black" }}>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Button</Button>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                  <Card
                    body
                    inverse
                    style={{ background: "rgb(255,255,255,0.2)" }}
                  >
                    <CardTitle style={{ color: "black" }} tag="h5">
                      Special Title Treatment
                    </CardTitle>
                    <CardText style={{ color: "black" }}>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Button</Button>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                  <Card
                    body
                    inverse
                    style={{ background: "rgb(255,255,255,0.2)" }}
                  >
                    <CardTitle style={{ color: "black" }} tag="h5">
                      Special Title Treatment
                    </CardTitle>
                    <CardText style={{ color: "black" }}>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Button</Button>
                  </Card>
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

export default RecordDashboardPatient;
