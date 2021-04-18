import React from 'react';
import {
    Button,
    Card,
    CardBody,
    Form,
    Container,
    Row,
    Col
} from "reactstrap";
import { Link } from "react-router-dom";
import LoginNavbar from "../../MainComponents/LoginNavbar"
import LoginFooter from "../../MainComponents/LoginFooter";
class RegistrationMain extends React.Component {
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
                        <Container className="pt-lg-7">
                            <Row className="justify-content-center">
                                <Col lg="5">
                                    <Card className="bg-secondary shadow border-0">
                                        <CardBody style={{backgroundColor:"Rgb(71, 115, 168,0.5)"}} className="px-lg-5 py-lg-5">
                                            <Form role="form">
                                                <div className="text-center">
                                                  <Link> <Button
                                                        
                                                        className="my-4"
                                                        color="primary"
                                                        type="button"
                                                    >
                                                        Patient
                          </Button></Link> 
                                                </div>
                                                <div className="text-center">
                                                    <Link >
                                                        <Button
                                                            className="my-4"
                                                            color="primary"
                                                            type="button"
                                                        >
                                                            Staff  
                          </Button></Link>
                                                </div>
                                            </Form>
                                        </CardBody>
                                    </Card>

                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <LoginFooter />
            </>



        );
    }
}

export default RegistrationMain;
