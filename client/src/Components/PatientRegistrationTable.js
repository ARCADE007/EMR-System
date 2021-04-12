import React, { useEffect, useRef } from 'react';
import {
    Container,
} from "reactstrap";
import LoginNavbar from "./LoginNavbar"
import LoginFooter from "./LoginFooter";
import PatientCustomMaterialTable from './PatientCustomMaterialTable';
function PatientRegistrationTable() {

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
                       <PatientCustomMaterialTable/>
                    </Container>
                </section>
            </main>
            <LoginFooter />
        </>



    );

}

export default PatientRegistrationTable;
