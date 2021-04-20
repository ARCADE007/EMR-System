import React, { useRef, useEffect, useState }  from 'react';
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
import LoginNavbar from "../../MainComponents/LoginNavbar";
import LoginFooter from "../../MainComponents/LoginFooter";
function AddRecord() {
    const refcontainer = useRef(null);
  useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        
    });
    const [recordNameIsValid, setRecordNameIsValid] = useState(false)
  const [nameIsValid, setNameIsValid] = useState(false)

    const [errorMessage, setErrorMessage] = useState('')
  
  const AddRecord = (value) => {
    if (validator.isStrongPassword(value, {
        minLength:4, minLowercase: 1,
      minUppercase: 0, minNumbers: 0, minSymbols: 0
    })) {
        setRecordNameIsValid(true);
      setErrorMessage("");
    } else {
        setRecordNameIsValid(false);
      setErrorMessage('Enter Valid Record Name');
    }
  }

  const [errorMessageans, setErrorMessageans] = useState('')
  const DiseaseName = (name) => {
    if (validator.isStrongPassword(name, {
        minLength:4, minLowercase: 1,
      minUppercase: 0, minNumbers: 0, minSymbols: 0
    })) {
        setNameIsValid(true);
      setErrorMessageans("");
    } else {
        setNameIsValid(false);
      setErrorMessageans('Enter Valid Disease Name');
    }
  }
    
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
                                    <div style={{backgroundColor:"Rgb(125,125,125,0.6)",fontWeight:"bold",textAlign:"center",paddingTop:"50px"}} >
                                            
                                            <span>Enter Card Details</span>
                                       
                                        </div>
                                        <CardBody style={{backgroundColor:"Rgb(125,125,125,0.6)"}} className="px-lg-5 py-lg-5">
                                            <Form method="post" action="" role="form">
                                                <FormGroup className="mb-3">
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="ni ni-ruler-pencil" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input placeholder="Enter Record Name" type="text"onChange={(e) => AddRecord(e.target.value)} />
                                                    </InputGroup>
                                                    <span 
                                                    style={{
                                                        color:"lightblue"
                                                    }}>{errorMessage}</span>
                                                </FormGroup>
                                                <FormGroup className="mb-3">
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="ni ni-ruler-pencil" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input placeholder="Enter Disease Name" type="text"onChange={(e) => DiseaseName(e.target.value)} />
                                                    </InputGroup>
                                                    <span 
                                                    style={{
                                                        color:"lightblue"
                                                    }}>{errorMessageans}</span>
                                                </FormGroup>
                                                <div className="text-center">
                                                    <Button
                                                        className="my-4"
                                                        color="primary"
                                                        type="button"
                                                        disabled={!(recordNameIsValid && nameIsValid)}
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

export default AddRecord;
