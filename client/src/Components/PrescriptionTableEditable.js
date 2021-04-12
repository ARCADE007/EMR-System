import React, { useEffect, useRef } from 'react';
import "./CDDDD.css";
import {
    
    Container,
} from "reactstrap";
import LoginNavbar from "./LoginNavbar"
import LoginFooter from "./LoginFooter";
import CustomPrescriptionTableEditable from './CustomPrescriptionTableEditable';
function PrescriptionTableEditable() {

    const refcontainer = useRef(null)
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;



    });



    return (
        <>
            <LoginNavbar />
            <main ref={refcontainer}>
                <section className=" Naya__mauka section section-shaped section-lg">
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
                        <CustomPrescriptionTableEditable />


                    </Container>
                </section>
            </main>
            <LoginFooter />
        </>



    );

}

export default PrescriptionTableEditable;
