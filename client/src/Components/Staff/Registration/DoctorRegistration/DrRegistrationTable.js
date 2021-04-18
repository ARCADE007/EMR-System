import React, { useEffect, useRef } from 'react';
import "../../../CDDDD.css";

import CustomMaterialTable from "./CustomMaterialTable";
import {
   
    Container,
    Button
} from "reactstrap";
import LoginNavbar from "../../../MainComponents/LoginNavbar"
import LoginFooter from "../../../MainComponents/LoginFooter";
import {Link} from "react-router-dom";
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
                <section style={{backgroundColor:"rgb(255,99,71,0.6)"}} className="section section-shaped section-lg">
                    <div className="  shape shape-style-1 bg-gradient-default">
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
                        <div style={{float:"right",padding:"6px"}}><Link to=""><Button>Save</Button></Link></div>
                    </Container>
                </section>
            </main>
            <LoginFooter />
        </>



    );

}

export default DrRegistrationTable;
