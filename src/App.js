import React from 'react';
// Bootstrap is imported from node modules library
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from "react-bootstrap";
import RightLogin from "./Components/RightLogin";
import LeftLogin from "./Components/LeftLogin";
function App() {
    return (
        <div style={{ marginTop: "5%", position: "absolute" }}>
            <Container>
                <Row xs={1} md={2} >
                    <Col><LeftLogin /></Col>

                    <Col><RightLogin /></Col>

                </Row>
            </Container>

        </div>
    );
}
export default App;