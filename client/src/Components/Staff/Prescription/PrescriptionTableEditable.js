import React, { useEffect, useRef, useState } from "react";
import { Button, Container } from "reactstrap";
import "../../CDDDD.css";
import LoginNavbar from "../../MainComponents/LoginNavbar";
import LoginFooter from "../../MainComponents/LoginFooter";
import CustomPrescriptionTableEditable from "./CustomPrescriptionTableEditable";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
function PrescriptionTableEditable() {
  const { prescriptionId, staffId } = useParams();
  const [data, setData] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const refcontainer = useRef(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    axios
      .get("http://localhost:3001/medicines/" + prescriptionId, {
        withCredentials: true,
      })
      .then((result) => {
        setMedicines(result.data);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setMedicines([]);
        }
        console.error(err);
      });
  }, [prescriptionId]);

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
              Medicines
            </h1>
          </div>
          <Container className="pt-lg-7">
            <CustomPrescriptionTableEditable
              staffId={staffId}
              data={data}
              setData={setData}
              medicines={medicines}
              prescriptionId={prescriptionId}
            />
            {medicines.length === 0 &&
              data.length !== 0 &&
              staffId === Cookies.get("id") && (
                <div style={{ float: "right", padding: "6px" }}>
                  <Button
                    onClick={() => {
                      data.forEach((medicine) => {
                        console.table(medicine);
                        axios
                          .post(`http://localhost:3001/medicines`, {
                            name: medicine.name,
                            dateFrom: medicine.dateFrom,
                            dateTo: medicine.dateTo,
                            timeMorning: medicine.timeMorning,
                            timeEvening: medicine.timeEvening,
                            timeNight: medicine.timeNight,
                            prescriptionId: prescriptionId,
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      });
                      window.location.href = `/PrescriptionTableEditable/${prescriptionId}/${staffId}`;
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

export default PrescriptionTableEditable;
