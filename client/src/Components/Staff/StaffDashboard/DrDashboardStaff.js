import React, { useRef, useEffect, useState }  from "react";
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
import { Link } from "react-router-dom";
function DrDashboardStaff(){
  const refcontainer = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    
  });

  
    return (
      <>
        <LoginNavbar />
        <main ref={refcontainer}>
          <section style={{backgroundColor:"rgb(255,99,71,0.6)"}} className="Custom_heading section section-shaped section-lg">
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
            <div className="Patient__Record"><Row>
              <Col xs="12" sm="12" md="6" lg="6" >
               <h1 style={{color:"white"}}>Prescription</h1></Col><Col xs="12" sm="12" md="6" lg="6" style={{paddingTop:"5px"}}>
                <Link to="/AddDr"><Button>New Prescription</Button></Link></Col></Row></div>
                <Container>
                <div>
                <Row>
                  <Col xs="12" sm="6" md="4" lg="3" className="Card__Padding">
                    <Card
                      body
                      inverse
                      style={{backgroundColor:"Rgb(255,99,71,0.5)" }}
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
                    <Card
                      body
                      inverse
                      style={{backgroundColor:"Rgb(255,99,71,0.5)" }}
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
                    <Card
                      body
                      inverse
                      style={{backgroundColor:"Rgb(255,99,71,0.5)" }}
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
                    <Card
                      body
                      inverse
                      style={{backgroundColor:"Rgb(255,99,71,0.5)" }}
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
                    <Card
                      body
                      inverse
                      style={{backgroundColor:"Rgb(255,99,71,0.5)" }}
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
                    <Card
                      body
                      inverse
                      style={{backgroundColor:"Rgb(255,99,71,0.5)" }}
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
                    <Card
                      body
                      inverse
                      style={{backgroundColor:"Rgb(255,99,71,0.5)" }}
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
                    <Card
                      body
                      inverse
                      style={{backgroundColor:"Rgb(255,99,71,0.5)" }}
                    >
                      <CardTitle style={{color:"white"}} tag="h5">Special Title Treatment</CardTitle>
                      <CardText>
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

export default DrDashboardStaff;
