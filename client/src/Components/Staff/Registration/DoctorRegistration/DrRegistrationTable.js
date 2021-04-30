import React, { useState, useEffect, useRef } from "react";
import "../../../CDDDD.css";

import CustomMaterialTable from "./CustomMaterialTable";
import { Container, Button } from "reactstrap";
import LoginFooter from "../../../MainComponents/LoginFooter";
import { Link } from "react-router-dom";
import axios from "axios";
import RegistrationToRegistrationMain from "../../../MainComponents/RegistraionToRegistrationMain";
function DrRegistrationTable() {
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
          <Container className="pt-lg-7">
            <CustomMaterialTable data={data} setData={setData} />
            <div style={{ float: "right", padding: "6px" }}>
              <Link to="">
                <Button
                  onClick={() => {
                    data.forEach((staff) => {
                      axios
                        .post(`http://localhost:3001/staffs`, staff)
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

export default DrRegistrationTable;
