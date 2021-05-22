import React, { useEffect, useRef } from "react";
import { Button, Container } from "reactstrap";
import "../../CDDDD.css";
import ReportToDashboardPatient from "../../MainComponents/ReportToDashboardPatient";
import LoginFooter from "../../MainComponents/LoginFooter";
import { Link } from "react-router-dom";
import ReportPatientEditable from "./ReportPatientEditable";
function ReportPatient() {
  const refcontainer = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });

  return (
    <>
      <ReportToDashboardPatient />
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
            <h1 style={{ color: "white", textAlign: "center" }}>My Report</h1>
          </div>
          <Container className="pt-lg-7">
            <ReportPatientEditable />
          </Container>
        </section>
      </main>
      <LoginFooter />
    </>
  );
}

export default ReportPatient;
