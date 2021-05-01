import React, { useState, useEffect, useRef } from "react";
import "../../../CDDDD.css";
import { Container, Button } from "reactstrap";
import "../../../Table.css";
import RegistrationToRegistrationMain from "../../../MainComponents/RegistraionToRegistrationMain";
import LoginFooter from "../../../MainComponents/LoginFooter";
import PatientCustomMaterialTable from "./PatientCustomMaterialTable";
import { Link } from "react-router-dom";
import axios from "axios";

function PatientRegistrationTable() {
  const refcontainer = useRef(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });
  return (
    <>
      <RegistrationToRegistrationMain />
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
          <Container className="pt-lg-7">
            <PatientCustomMaterialTable data={data} setData={setData} />
            <div style={{ float: "right", padding: "6px" }}>
              <Link to="">
                <Button
                  onClick={() => {
                    data.forEach((patient) => {
                      axios
                        .post(`http://localhost:3001/patients`, patient)
                        .then()
                        .catch((error) => {
                          console.log(error);
                        });
                    });
                  }}
                >
                  Save
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <LoginFooter />
    </>
  );
}

export default PatientRegistrationTable;
