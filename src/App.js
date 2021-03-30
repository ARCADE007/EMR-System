import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Jumbotron } from "react-bootstrap";
import LeftLogin from "./Components/LeftLogin";
function App() {
    return (
        <Jumbotron style={{ backgroundImage: "url(image/LoginPage.jpg)", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "cover", position: 'relative', height: "100vh" }}>
            <div className="Login__page" style={{ marginTop: "5%", alignContent: "center" }}>
                <Container style={{ width: "100rem", alignContent: "left" }}>
                    <Row xs={1} md={2} >
                        <Col ><LeftLogin /></Col>
                    </Row>
                </Container>

            </div>
        </Jumbotron>
    );
}
export default App;