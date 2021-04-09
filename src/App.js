import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import AskPatient from './Components/AskPatient';
import ForgotPass from './Components/ForgotPass';
import AddDrDisease from './Components/AddDrDisease';
import AddReport from './Components/AddReport';
import RegistrationMain from './Components/RegistrationMain';
import DrDashboard from './Components/DrDashboard';
import PtDashboard from './Components/PtDashboard';

function App() {
    return (
        <Router>
            <div className="app" >
                <Switch>
                <Route path="/PtDashboard">
                        <PtDashboard/>
                    </Route>
                <Route path="/DrDashboard">
                        <DrDashboard />
                    </Route>

                    <Route path="/Registration">
                        <RegistrationMain />
                    </Route>
                    <Route path="/AddDr">
                        <AddDrDisease />
                    </Route>

                    <Route path="/AddReport">
                        <AddReport />
                    </Route>

                    <Route path="/ForgotPass">
                        <ForgotPass />
                    </Route>

                    <Route path="/AskPatientID">
                        <AskPatient />
                    </Route>

                    <Route path="/">
                        <Login />
                    </Route>


                </Switch>
            </div>
        </Router>
    );
}
export default App;