import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";
import "./Auth.css";

class Login extends React.Component {
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

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("auth/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem(
          "user",
          res.data.message
            .split(" ")[2]
            .substring(0, res.data.message.split(" ")[2].length - 1),
          "login response"
        );
        localStorage.setItem("userid", res.data.user_id);
        this.props.history.push("/activity/add");
        console.log(this.state);
      })
      .catch(err => {
        console.log(err, err);
      });
  };

  render() {
    return (
      <div className="login">
        <div class="bg-img">
          <div className="box">
            <h1>LOGIN</h1>
            <form onSubmit={this.login}>
              <div className="inputBox">
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
                  LOGIN
                </button>
              </div>
              <p>
                Don't have an account? <Link to="/register"> SIGN UP</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
