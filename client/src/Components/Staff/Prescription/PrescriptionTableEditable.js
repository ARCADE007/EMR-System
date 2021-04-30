import React, { useEffect, useRef, useState } from "react";
import { Button, Container } from "reactstrap";
import "../../CDDDD.css";
import LoginNavbar from "../../MainComponents/LoginNavbar";
import LoginFooter from "../../MainComponents/LoginFooter";
import CustomPrescriptionTableEditable from "./CustomPrescriptionTableEditable";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function PrescriptionTableEditable() {
  const { prescriptionId } = useParams();

  const [data, setData] = useState([]);
  const refcontainer = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    axios
      .get("http://localhost:3001/medicines/" + prescriptionId, {
        withCredentials: true,
      })
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
              Prescription
            </h1>
          </div>
          <Container className="pt-lg-7">
            <CustomPrescriptionTableEditable data={data} setData={setData} />
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

export default PrescriptionTableEditable;
