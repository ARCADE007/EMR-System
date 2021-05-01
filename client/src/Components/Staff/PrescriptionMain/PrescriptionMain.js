import React, { useEffect, useRef } from "react";
import { Button, Container } from "reactstrap";
import "../../CDDDD.css";
import LoginNavbar from "../../MainComponents/LoginNavbar";
import LoginFooter from "../../MainComponents/LoginFooter";
import { useParams, Link } from "react-router-dom";
import PrescriptionMainEditable from "./PrescriptionMainEditable";
function PrescriptionMain() {
  const refcontainer = useRef(null);
  const { staffId } = useParams();
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
            <h1 style={{ color: "white", textAlign: "center" }}>
              Prescriptions
            </h1>
          </div>
          <Container className="pt-lg-7">
            <PrescriptionMainEditable staffId={staffId} />
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

export default PrescriptionMain;
