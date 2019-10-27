import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";
import "./Auth.css";

class RegisterForm extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("auth/register", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.username);
        localStorage.setItem("userid", res.data.user_id);
        this.props.history.push("/activity/add");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="register">
        <div className="box">
          <h1 className="text-center">SIGN UP</h1>
          <form onSubmit={this.signup}>
            <div className="inputBox">
              <i class="fa fa-user" aria-hidden="true"></i>
              <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
                placeholder="Username"
                required
              />
            </div>
            <div className="inputBox">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn-login">
                SIGN UP
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">LOGIN</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
