import React, { useEffect, useRef } from 'react';
import "../../../CDDDD.css";

import CustomMaterialTable from "./CustomMaterialTable";
import {
   
    Container
} from "reactstrap";
import "../../../Table.css";
import LoginNavbar from "../../../MainComponents/LoginNavbar"
import LoginFooter from "../../../MainComponents/LoginFooter";
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
                <section className=" Naya__mauka section section-shaped section-lg">
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

                    </Container>
                </section>
            </main>
            <LoginFooter />
        </>



    );

}

export default DrRegistrationTable;
