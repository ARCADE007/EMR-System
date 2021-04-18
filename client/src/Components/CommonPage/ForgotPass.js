import React, { useRef, useEffect, useState } from 'react';
import validator from "validator";
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
import {Link} from "react-router-dom";
import LoginNavbar from "../MainComponents/LoginNavbar"
import LoginFooter from "../MainComponents/LoginFooter";
function ForgotPass() {
    const refcontainer = useRef(null);
  useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        
    });
    const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  

  
    
        return (
            <>
                <LoginNavbar />
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
                        <Container  className="pt-lg-7">
                            <Row className="justify-content-center">
                                <Col  lg="5">
                                    <Card  className="bg-secondary shadow border-0">
                                        <div style={{backgroundColor:"Rgb(71, 115, 168,0.8)",fontWeight:"bold",textAlign:"center",paddingTop:"50px"}} >
                                            
                                            <span>Enter Your Email</span>
                                       
                                        </div>
                                        <CardBody style={{backgroundColor:"Rgb(71, 115, 168,0.8)"}} className="px-lg-5 py-lg-5">
                                            <Form role="form">
                                                <FormGroup className="mb-3">
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="ni ni-email-83" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input 
                                                        placeholder="Enter Your Registered Email" 
                                                        name="email"
                                                        type="email"
                                                        onChange={(e) => validateEmail(e)} />
                                                    </InputGroup>
                                                    <span
                                                    style={{
                                                        color:"lightblue"
                                                    }}>{emailError}</span>
                                                </FormGroup>

                                                <div className="text-center">
                                                    <Link to="/"><Button
                                                        className="my-4"
                                                        color="primary"
                                                        type="button"
                                                        
                                                    >
                                                        Send Email
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

export default ForgotPass;
