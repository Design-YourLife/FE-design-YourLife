
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Authentication/Login";
import RegisterForm from "./components/Authentication/RegisterForm";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import ActivityList from "./components/Activities/Activities";
import ReflectionLogs from "./components/ReflectionLogs/ReflectionLogs";
import Header from "./components/Routes/Header";
import ActivityLogs from "./components/ActivityLogs/ActivityLogs";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={RegisterForm} />
          <PrivateRoute exact path="/activities" component={ActivityList} />
          <PrivateRoute exact path="/logs" component={ActivityLogs} />
          <PrivateRoute exact path="/reflections" component={ReflectionLogs} />
          <PrivateRoute exact path="/protected" component={ActivityList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
