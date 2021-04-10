import React from 'react';
import MaterialTable from "material-table";
import {
    Button,
    Card,
    CardHeader,
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
import LoginNavbar from "./LoginNavbar"
import LoginFooter from "./LoginFooter";
class DrRegistrationTable extends React.Component {
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
                        <div>

                        </div>
                        <Container className="pt-lg-7">

                        </Container>
                    </section>
                </main>
                <LoginFooter />
            </>



        );
    }
}

export default DrRegistrationTable;
