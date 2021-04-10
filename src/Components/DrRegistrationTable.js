import React, { useEffect, useRef } from 'react';
import MaterialTable from "material-table";
import CustomMaterialTable from "./CustomMaterialTable";
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
function DrRegistrationTable() {

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
                    <div>

                    </div>
                    <Container className="pt-lg-7">
                        <CustomMaterialTable />


                    </Container>
                </section>
            </main>
            <LoginFooter />
        </>



    );

}

export default DrRegistrationTable;
