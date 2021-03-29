import React from 'react'
import { Row, Col, Form, Button } from "react-bootstrap";
const LeftLogin = () => {
    return (
        <div>
            <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={3}>
                        Login ID
    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Login" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={3}>
                        Password
    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Choose Role
      </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Patient"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="Doctor"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Staff"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default LeftLogin
