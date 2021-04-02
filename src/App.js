import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";

function App() {
    return (
        <Router>
            <div className="app" >
                <Switch>

                    <Route path="/">
                        <Login />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}
export default App;