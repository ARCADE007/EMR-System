import React from "react";
import {
  Button,
  Card,
  CardHeader,
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
  CardText,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";
import LoginNavbar from "./LoginNavbar";
import LoginFooter from "./LoginFooter";
import "./DrDashboard.css";
class PtDashboard extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <LoginNavbar />
        <main ref="main">
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
            <div className="Patient__Record"><h1>Patient Records</h1></div>
            <Container>
              <div>
                <Row>
                  <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                    <Card
                      body
                      inverse
                      style={{ backgroundColor: "#333", borderColor: "#333" }}
                    >
                      <CardTitle tag="h5">Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Button</Button>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                    <Card body inverse color="primary">
                      <CardTitle tag="h5">Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button color="secondary">Button</Button>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                    <Card
                      body
                      inverse
                      style={{ backgroundColor: "#333", borderColor: "#333" }}
                    >
                      <CardTitle tag="h5">Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Button</Button>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                    <Card body inverse color="primary">
                      <CardTitle tag="h5">Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button color="secondary">Button</Button>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                    <Card
                      body
                      inverse
                      style={{ backgroundColor: "#333", borderColor: "#333" }}
                    >
                      <CardTitle tag="h5">Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Button</Button>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                    <Card body inverse color="primary">
                      <CardTitle tag="h5">Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button color="secondary">Button</Button>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                    <Card
                      body
                      inverse
                      style={{ backgroundColor: "#333", borderColor: "#333" }}
                    >
                      <CardTitle tag="h5">Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Button</Button>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                    <Card body inverse color="primary">
                      <CardTitle tag="h5">Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button color="secondary">Button</Button>
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
}

export default PtDashboard;
