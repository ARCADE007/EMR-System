import React,{useRef,useEffect} from 'react';
import * as Yup from "yup";
import {ErrorMessage, FormikProvider, useFormik} from "formik";

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


function Login() {

    const refcontainer = useRef(null)
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;



     });

     const schema=Yup.object().shape({
         email:Yup.string().email('Invalid email !').required(),
         password:Yup.string().min(6,'At least 6 characters').max(15,'At most 15 characters').required
         ()
     })

     const formik=useFormik({
         initialValues:{
             email:'',
             password:''
         },
         validationSchema:schema,
         onSubmit:(values)=>{
             console.log(values)
         }
     })



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
                                            <FormikProvider value={formik}>
                                            <Form onSubmit={formik.handleSubmit} role="form">
                                                <FormGroup className="mb-3">
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="ni ni-email-83" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input 
                                                        name="email"
                                                        placeholder="Email" 
                                                        type="email" />
                                                        
                                                    </InputGroup>
                                                    <ErrorMessage name='email'/>
                                                </FormGroup>
                                                <FormGroup>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="ni ni-lock-circle-open" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            name='password'
                                                            placeholder="Password"
                                                            type="password"
                                                            autoComplete="off"
                                                            
                                                        />
                                                        
                                                        
                                                    </InputGroup>
                                                    <ErrorMessage name='password'/>
                                                    
                                                </FormGroup>
                                                
                                                
                                                <div className="text-center">
                                                    <Button
                                                        className="my-4"
                                                        color="primary"
                                                        type="submit"
                                                      //  disabled={!formik.isValid}
                                                        
                                                    >
                                                        Sign in
                                                 </Button>
                                                </div>
                                            </Form>
                                            </FormikProvider>
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

