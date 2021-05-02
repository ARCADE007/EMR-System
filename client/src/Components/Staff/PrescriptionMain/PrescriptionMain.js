import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Button, Container } from "reactstrap";
import "../../CDDDD.css";
import LoginNavbar from "../../MainComponents/LoginNavbar";
import LoginFooter from "../../MainComponents/LoginFooter";
import { useParams } from "react-router-dom";
import PrescriptionMainEditable from "./PrescriptionMainEditable";
import Cookies from "js-cookie";
function PrescriptionMain() {
  const refcontainer = useRef(null);

  const { staffName, staffId, patientId } = useParams();
  const [prescriptions, setPrescriptions] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/prescriptions/${patientId}/${staffId}`,
        {
          withCredentials: true,
        }
      )
      .then((result) => {
        setPrescriptions(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [patientId, staffId]);

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
            <h1
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Prescriptions
            </h1>
          </div>
          <Container className="pt-lg-7">
            <PrescriptionMainEditable
              staffName={staffName}
              staffId={staffId}
              prescriptions={prescriptions}
              data={data}
              setData={setData}
            />
            {staffId === Cookies.get("id") &&
              data.length !== 0 && (
                <div
                  style={{ float: "right", padding: "6px" }}
                >
                  <Button
                    onClick={() => {
                      data.forEach((prescription) => {
                        axios
                          .post(
                            `http://localhost:3001/prescriptions`,
                            {
                              description:
                                prescription.description,
                              date: prescription.date,
                              disease: prescription.disease,
                              staffId: staffId,
                              patientId: patientId,
                            }
                          )
                          .then(() => {
                            window.location.href = `/PrescriptionMain/${patientId}/${staffId}/${staffName}`;
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      });
                    }}
                  >
                    Submit
                  </Button>
                </div>
              )}
          </Container>
        </section>
      </main>
      <LoginFooter />
    </>
  );
}

export default PrescriptionMain;
