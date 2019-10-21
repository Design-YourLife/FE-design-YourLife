
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Authentication/Login";
import RegisterForm from "./components/Authentication/RegisterForm";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import ActivityList from "./components/Activities/Activities";
import ReflectionLogs from "./components/ReflectionLogs/ReflectionLogs";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/activities" component={ActivityList} />
          <Route exact path="/reflections" component={ReflectionLogs} />
          <PrivateRoute exact path="/protected" component={ActivityList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
