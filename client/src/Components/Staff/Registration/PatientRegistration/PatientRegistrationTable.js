/* eslint-disable default-case */
import React, { useState, useEffect, useRef, useReducer } from "react";
import "../../../CDDDD.css";
import { Container, Button, Row, Col } from "reactstrap";
import "../../../Table.css";
import RegistrationToRegistrationMain from "../../../MainComponents/RegistraionToRegistrationMain";
import LoginFooter from "../../../MainComponents/LoginFooter";
import PatientCustomMaterialTable from "./PatientCustomMaterialTable";
import axios from "axios";

const actionReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        add: true,
        modify: false,
        view: false,
      };
    case "MODIFY":
      return {
        ...state,
        add: false,
        modify: true,
        view: false,
      };
    case "VIEW":
      return {
        ...state,
        add: false,
        modify: false,
        view: true,
      };
    default:
      break;
  }
};

function PatientRegistrationTable() {
  const refcontainer = useRef(null);
  const [data, setData] = useState([]);
  const [action, dispatchAction] = useReducer(actionReducer, {
    add: false,
    modify: false,
    view: false,
  });

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    dispatchAction({ type: "VIEW" });
    axios
      .get(`http://localhost:3001/allpatients`, {
        withCredentials: true,
      })
      .then((result) => {
        setData(result.data);
      });
  }, []);

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
          <Container>
            <Row style={{ paddingLeft: "30%", paddingRight: "20%" }}>
              <Col
                xs="12"
                sm="12"
                md="6"
                lg="6"
                style={{ paddingTop: "5px", paddingBottom: "5%" }}
              >
                <Button
                  onClick={() => {
                    dispatchAction({ type: "ADD" });
                  }}
                >
                  Add Patient
                </Button>
              </Col>
              <Col
                xs="12"
                sm="12"
                md="6"
                lg="6"
                style={{ paddingTop: "5px", paddingBottom: "5%" }}
              >
                <Button
                  onClick={() => {
                    dispatchAction({ type: "MODIFY" });
                  }}
                >
                  Update Patient
                </Button>
              </Col>
            </Row>
          </Container>

          <Container>
            <PatientCustomMaterialTable
              data={data}
              setData={setData}
              action={action}
            />
          </Container>
        </section>
      </main>
      <LoginFooter />
    </>
  );
}

export default PatientRegistrationTable;
