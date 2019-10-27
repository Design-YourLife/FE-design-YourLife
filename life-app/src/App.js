import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Authentication/Login";
import RegisterForm from "./components/Authentication/RegisterForm";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import ActivityLogs from "./components/Activities/ActivityLogs";
import ReflectionLogs from "./components/ReflectionLogs/ReflectionLogs";
import Header from "./components/Routes/Header";

import ActivityDisplay from "./components/Activities/ActivityDisplay";
import Activityform from "./components/Activities/Activityform";
import "./App.css";
import Activities from "./components/Activities/Activities";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={RegisterForm} />

          <Route exact path="/activities" component={Activities} />
          <Route exact path="/list" component={ActivityDisplay} />
          <PrivateRoute exact path="/activitylogs" component={ActivityLogs} />
          <PrivateRoute exact path="/activity/add" component={Activityform} />
          <PrivateRoute exact path="/reflections" component={ReflectionLogs} />
          <PrivateRoute exact path="/protected" component={ActivityLogs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
