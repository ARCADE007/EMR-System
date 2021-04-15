import React,{useRef,useEffect} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";
import * as yup from "yup";

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
import { Link } from "react-router-dom";
import LoginNavbar from "../MainComponents/LoginNavbar";
import LoginFooter from "../MainComponents/LoginFooter";

const schema = yup.object().shape({
    email:yup.string().required() ,
    password: yup.string().required()
})

function Login() {

    const refcontainer = useRef(null)
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;



     });

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
                        <Container className="pt-lg-7">
                            <Row className="justify-content-center">
                                <Col lg="5">
                                    <Card className="bg-secondary shadow border-0">
                                        <div style={{backgroundColor:"Rgb(71, 115, 168,0.8)",textAlign:"center",paddingTop:"50px"}} >
                                            
                                                        <span>Sign in with your credentials</span>
                                                   
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
                                                        placeholder="Email" 
                                                        type="email" />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="ni ni-lock-circle-open" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Password"
                                                            type="password"
                                                            autoComplete="off"
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                
                                                <div className="text-center">
                                                    <Button
                                                        className="my-4"
                                                        color="primary"
                                                        type="button"
                                                    >
                                                        Sign in
                                                 </Button>
                                                </div>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                    <Row className="mt-3">
                                        <Col xs="6">
                                            <Link to="/ForgotPass"
                                                className="text-light"

                                            >
                                                <small>Forgot password?</small>
                                            </Link>
                                        </Col>

                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <LoginFooter />
            </>



        );
    }

export default Login;

