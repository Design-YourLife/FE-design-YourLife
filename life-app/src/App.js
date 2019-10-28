import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Authentication/Login";
import RegisterForm from "./components/Authentication/RegisterForm";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import WorkingActivityLog from "./components/Activities/WorkingaActivityLog";
import ReflectionLogs from "./components/ReflectionLogs/ReflectionLogs";
import Header from "./components/Routes/Header";
import EditLog from "./components/Activities/EditLog";
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
          <Route exact path="/update-log/:user/:id" component={EditLog} />} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/list" component={ActivityDisplay} />
          <PrivateRoute
            exact
            path="/activitylogs"
            component={WorkingActivityLog}
          />
          <PrivateRoute exact path="/activity/add" component={Activityform} />
          <PrivateRoute exact path="/list" component={ActivityDisplay} />
          <PrivateRoute exact path="/reflections" component={ReflectionLogs} />
          <PrivateRoute
            exact
            path="/protected"
            component={WorkingActivityLog}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
