import React, { useEffect, useRef } from "react";
import "../../CDDDD.css";
import { Container } from "reactstrap";
import "../../Table.css";
import LoginFooter from "../../MainComponents/LoginFooter";
import CustomPrescriptionTable from "./CustomPrescriptionTable";
import PatientMedGoBack from "../../MainComponents/PatientMedGoBack";
import { useParams } from "react-router";
function PrescriptionTable() {
  const refcontainer = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });
  const { staffId, staffName } = useParams();
  return (
    <>
      <PatientMedGoBack staffId={staffId} staffName={staffName} />
      <main ref={refcontainer}>
        <section
          style={{ backgroundColor: "rgb(0,100,0,0.6)" }}
          className=" Naya__mauka section section-shaped section-lg"
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
          <div></div>
          <Container className="pt-lg-7">
            <CustomPrescriptionTable />
          </Container>
        </section>
      </main>
      <LoginFooter />
    </>
  );
}

export default PrescriptionTable;
