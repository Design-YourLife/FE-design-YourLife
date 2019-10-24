import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    localStorage.setItem("userid", "");
    this.props.history.push("/login");
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            life/note
          </a>
          <ul className="nav justify-content-center">
            <li className="nav-item active">
              <a className="nav-link" href="https://life-notes.netlify.com/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/login">LOGIN</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/logs">CREATE LOG</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/activities">ACTIVITIES</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/reflections">REFLECTIONS</Link>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link onClick={this.logout}>LOGOUT</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
