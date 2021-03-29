import React from 'react';
// Bootstrap is imported from node modules library
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import RightLogin from "./Components/RightLogin";
import LeftLogin from "./Components/LeftLogin";
function App() {
    return (
        <div className="App" style={{ marginTop: "5%" }}>
            <Row className="landing" xs={1} md={2} >
                <Col><LeftLogin /></Col>
                <Col><RightLogin /></Col>

            </Row>

        </div>
    );
}
export default App;