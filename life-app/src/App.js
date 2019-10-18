import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ActivityList from "./components/Activities";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={ActivityList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
