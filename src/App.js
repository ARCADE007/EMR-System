import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftLogin from "./Components/LeftLogin";
import StaffAfterSubmit from './Components/StaffAfterSubmit';
function App() {
    return (
        <Router>
            <div className="app" >
                <Switch>

                    <Route path="/ajadoctor">
                        <StaffAfterSubmit />
                    </Route>

                    <Route path="/">
                        <LeftLogin />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}
export default App;