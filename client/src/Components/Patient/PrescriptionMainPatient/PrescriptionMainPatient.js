import React, { useEffect, useRef } from "react";
import { Button, Container } from "reactstrap";
import "../../CDDDD.css";
import LoginNavbar from "../../MainComponents/LoginNavbar";
import LoginFooter from "../../MainComponents/LoginFooter";
import { Link } from "react-router-dom";
import PrescriptionMainEditablePatient from "./PrescriptionMainEditablePatient";
function PrescriptionMainPatient() {
  const refcontainer = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });

  return (
    <>
      <LoginNavbar />
      <main ref={refcontainer}>
        <section
          style={{ backgroundColor: "rgb(0,100,0,0.6)" }}
          className="section section-shaped section-lg"
        >
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
            <h1 style={{ color: "white", textAlign: "center" }}>
              Prescriptions
            </h1>
          </div>
          <Container className="pt-lg-7">
            <PrescriptionMainEditablePatient />
            <div style={{ float: "right", padding: "6px" }}>
              <Link to="">
                <Button>Submit</Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <LoginFooter />
    </>
  );
}

export default PrescriptionMainPatient;