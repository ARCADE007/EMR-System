import React from 'react';
import "./StaffAfterSubmit.css";
import {Row, Col, Container, Form, Button } from "react-bootstrap";

const StaffAfterSubmit = () => {
    return (
        <div>
            <Container className = "After__Submit" >
                    <Row className = "After__Content" >
                        <Col >
                        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Enter Patient Id" />
  </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form></Col>
                    </Row>
                </Container>
         
        </div>
    )
}

export default StaffAfterSubmit;
