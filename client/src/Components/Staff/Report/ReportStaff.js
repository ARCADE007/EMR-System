import React, { useEffect, useRef, useState } from "react";
import { Button, Container } from "reactstrap";
import "../../CDDDD.css";

import LoginFooter from "../../MainComponents/LoginFooter";
import { Link, useParams } from "react-router-dom";
import ReportStaffEditable from "./ReportStaffEditable";
import axios from "axios";
import StaffReportstoDrDashboardRecord from "../../MainComponents/StaffReportstoDrDashboardRecord";
function ReportStaff() {
  const { patientId, recordId, recordName } = useParams();
  const refcontainer = useRef(null);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    axios
      .get("http://localhost:3001/reports/" + recordId, {
        withCredentials: true,
      })
      .then((result) => {
        setReports(result.data);
        setEdit(!Boolean(result.data.length));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [recordId]);

  return (
    <>
      <StaffReportstoDrDashboardRecord patientId={patientId} />
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
              Patient Report
            </h1>
          </div>
          <Container className="pt-lg-7">
            <ReportStaffEditable
              reports={reports}
              data={data}
              setData={setData}
              edit={edit}
              recordName={recordName}
            />
            {data.length !== 0 && (
              <div style={{ float: "right", padding: "6px" }}>
                <Link to={`/RecordDashboardStaff/${patientId}`}>
                  <Button
                    onClick={() => {
                      data.forEach((report) => {
                        axios.post(
                          `http://localhost:3001/reports`,
                          {
                            reportName: report.reportName,
                            date: report.Date,
                            file: report.file,
                            recordId: recordId,
                          },
                          { withCredentials: true }
                        );
                      });
                    }}
                  >
                    Submit
                  </Button>
                </Link>
              </div>
            )}
          </Container>
        </section>
      </main>
      <LoginFooter />
    </>
  );
}

export default ReportStaff;
