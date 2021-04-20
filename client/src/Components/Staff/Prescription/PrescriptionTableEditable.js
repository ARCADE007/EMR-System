import React, { useEffect, useRef } from 'react';
import {
    Button,
    
    Container
} from "reactstrap";
import "../../CDDDD.css";
import LoginNavbar from "../../MainComponents/LoginNavbar"
import LoginFooter from "../../MainComponents/LoginFooter";
import CustomPrescriptionTableEditable from './CustomPrescriptionTableEditable';
import {Link} from "react-router-dom";
function PrescriptionTableEditable() {

    const refcontainer = useRef(null)
    useEffect(() => {
        
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;



    });



    return (
        <>
            <LoginNavbar />
            <main  ref={refcontainer}>
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
                       <h1 style={{color:"white",textAlign:"center"}}>Prescription</h1>
                    </div>
                    <Container className="pt-lg-7">
                        <CustomPrescriptionTableEditable />
                        <div style={{float:"right",padding:"6px"}}><Link to=""><Button>Submit</Button></Link></div>
                    </Container>
                    
                </section>
            </main>
            <LoginFooter />
        </>



    );

}

export default PrescriptionTableEditable;
