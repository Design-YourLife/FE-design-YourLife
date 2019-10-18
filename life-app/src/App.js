import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Authentication/Login';
import RegisterForm from './components/Authentication/RegisterForm';
import PrivateRoute from './components/Authentication/PrivateRoute';
import ActivityList from "./components/Activities";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
       <header className="App-header">
        <div className="login-form">
          <span><h2>life/note</h2>  <Route component={Login} /> </span>
          <p>Successful login user="testUser", pswrd "pass"</p>
        <RegisterForm /> <p>Register accepts user/password as entered unless      existing user</p>
      </div>
      </header>
     
        <Switch>
         
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={Home} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
