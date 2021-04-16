import React from "react";
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
import "../../DrDashboard.css";
class DrDashboardPatient extends React.Component {
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
          <section style={{backgroundColor:"rgb(144,238,144,0.8)"}} className="Custom_heading section section-shaped section-lg">
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
            <div className="Patient__Record"><h1 style={{color:"white"}}>Prescription</h1></div>
            <Container>
              <div>
                <Row>
                  <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                    <Card
                      body
                      inverse
                      style={{backgroundColor:"rgb(144,238,144,0.8)"}}
                    >
                      <CardTitle style={{color:"white"}} tag="h5">Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Button</Button>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                    <Card body inverse color="primary">
                      <CardTitle style={{color:"white"}} tag="h5">Special Title Treatment</CardTitle>
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
                      <CardTitle style={{color:"white"}} tag="h5">Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Button</Button>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                    <Card body inverse color="primary">
                      <CardTitle style={{color:"white"}} tag="h5">Special Title Treatment</CardTitle>
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
                      <CardTitle style={{color:"white"}} tag="h5">Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Button</Button>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                    <Card body inverse color="primary">
                      <CardTitle style={{color:"white"}} tag="h5">Special Title Treatment</CardTitle>
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
                      <CardTitle style={{color:"white"}} tag="h5">Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Button</Button>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                    <Card body inverse color="primary">
                      <CardTitle style={{color:"white"}} tag="h5">Special Title Treatment</CardTitle>
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

export default DrDashboardPatient;
