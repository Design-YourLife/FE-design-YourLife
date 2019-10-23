import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";

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
        this.props.history.push("/logs");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Sign Up</h2>
          <form onSubmit={this.signup}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
