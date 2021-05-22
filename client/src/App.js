import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Components/CommonPage/Login";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import AskPatient from "./Components/Staff/AskPatient";
import ForgotPass from "./Components/CommonPage/ForgotPass";
import AddDrDisease from "./Components/Staff/NewCard/AddDrDisease";
import AddRecord from "./Components/Staff/NewCard/AddRecord";
import RegistrationMain from "./Components/Staff/Registration/RegistrationMain";
import RecordDashboardStaff from "./Components/Staff/StaffDashboard/RecordDashboardStaff";
import DrRegistrationTable from "./Components/Staff/Registration/DoctorRegistration/DrRegistrationTable";
import PrescriptionTableEditable from "./Components/Staff/Prescription/PrescriptionTableEditable";
import PatientRegistrationTable from "./Components/Staff/Registration/PatientRegistration/PatientRegistrationTable";
import DrDashboardStaff from "./Components/Staff/StaffDashboard/DrDashboardStaff";
import PrescriptionTable from "./Components/Patient/Prescription/PrescriptionTable";
import DrDashboardPatient from "./Components/Patient/PatientDashboard/DrDashboardPatient";
import RecordDashboardPatient from "./Components/Patient/PatientDashboard/RecordDashboardPatient";
import ReportStaff from "./Components/Staff/Report/ReportStaff";
import PrescriptionMain from "./Components/Staff/PrescriptionMain/PrescriptionMain";
import PrescriptionMainPatient from "./Components/Patient/PrescriptionMainPatient/PrescriptionMainPatient";
import ReportPatient from "./Components/Patient/ReportPatient/ReportPatient";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* -------------------------PATIENT-------------------------------- */}

          <Route path="/DrDashboardPatient">
            <DrDashboardPatient />
          </Route>
          {/* Done */}

          <Route path="/RecordDashboardPatient">
            <RecordDashboardPatient />
          </Route>
          {/* Done */}

          <Route path="/ReportPatient/:recordId/:recordName">
            <ReportPatient />
          </Route>
          {/* Done */}

          <Route path="/PrescriptionMainPatient/:staffId/:staffName">
            <PrescriptionMainPatient />
          </Route>
          {/* Done */}

          <Route path="/PrescriptionTable/:staffId/:staffName/:prescriptionId">
            <PrescriptionTable />1
          </Route>
          {/* Done */}

          {/* -------------------------STAFF---------------------------------- */}

          <Route path="/AskPatientID">
            <AskPatient />
          </Route>

          <Route path="/DrDashboardStaff/:patientId">
            <DrDashboardStaff />
          </Route>

          {/*Pending*/}
          <Route path="/AddDr">
            <AddDrDisease />
          </Route>

          <Route path="/PrescriptionMain/:patientId/:staffId/:staffName">
            <PrescriptionMain />
          </Route>

          <Route path="/PrescriptionTableEditable/:prescriptionId/:staffId">
            <PrescriptionTableEditable />
          </Route>

          <Route path="/RecordDashboardStaff/:patientId">
            <RecordDashboardStaff />
          </Route>

          <Route path="/AddRecord/:patientId">
            <AddRecord />
          </Route>

          {/*Pending*/}
          <Route path="/ReportStaff/:patientId/:recordId/:recordName">
            <ReportStaff />
          </Route>

          {/* -------------------------RECEPTION------------------------------ */}

          <Route path="/Registration">
            <RegistrationMain />
          </Route>

          <Route path="/PatientRegistrationTable">
            <PatientRegistrationTable />
          </Route>

          <Route path="/DrRegistrationTable">
            <DrRegistrationTable />
          </Route>

          {/* -------------------------OTHERS------------------------------ */}

          {/*Pending*/}
          <Route path="/ForgotPass">
            <ForgotPass />
          </Route>

          {/*Pending for Receotionist*/}
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
