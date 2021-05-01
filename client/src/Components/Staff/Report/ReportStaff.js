import React, { useEffect, useRef, useState } from "react";
import { Button, Container } from "reactstrap";
import "../../CDDDD.css";
import LoginNavbar from "../../MainComponents/LoginNavbar";
import LoginFooter from "../../MainComponents/LoginFooter";
import { Link, useParams } from "react-router-dom";
import ReportStaffEditable from "./ReportStaffEditable";
import axios from "axios";
function ReportStaff() {
  const { recordId } = useParams();
  const refcontainer = useRef(null);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    axios
      .get("http://localhost:3001/reports/" + recordId, {
        withCredentials: true,
      })
      .then((result) => {
        setData(result.data);
        setEdit(!result.data.length);
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
              Patient Report
            </h1>
          </div>
          <Container className="pt-lg-7">
            <ReportStaffEditable data={data} setData={setData} edit={edit} />
            <div style={{ float: "right", padding: "6px" }}>
              {edit && (
                <Link to="">
                  <Button>Submit</Button>
                </Link>
              )}
            </div>
          </Container>
        </section>
      </main>
      <LoginFooter />
    </>
  );
}

export default ReportStaff;
