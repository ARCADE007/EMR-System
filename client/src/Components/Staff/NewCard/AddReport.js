import React from 'react';
import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";
import LoginNavbar from "../../MainComponents/LoginNavbar";
import LoginFooter from "../../MainComponents/LoginFooter";
class AddReport extends React.Component {
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
                    <section style={{backgroundColor:"rgb(255,99,71,0.6)"}} className="section section-shaped section-lg">
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
                                    <div style={{backgroundColor:"Rgb(255,99,71,0.5)",textAlign:"center",paddingTop:"50px"}} >
                                            
                                            <span>Enter Card Details</span>
                                       
                                        </div>
                                        <CardBody style={{backgroundColor:"Rgb(255,99,71,0.5)"}} className="px-lg-5 py-lg-5">
                                            <Form role="form">
                                                <FormGroup className="mb-3">
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="ni ni-email-83" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input placeholder="Enter Report ID" type="text" />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="mb-3">
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="ni ni-email-83" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input placeholder="Enter Disease Name" type="text" />
                                                    </InputGroup>
                                                </FormGroup>
                                                <div className="text-center">
                                                    <Button
                                                        className="my-4"
                                                        color="primary"
                                                        type="button"
                                                    >
                                                        Save
                          </Button>
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

export default AddReport;
