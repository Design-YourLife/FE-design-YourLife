import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ActivityLogCard from "./MovieCard";

export default class LogsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => this.setState({ logs: res.data }))
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <div className="logs-list">
        {this.state.logs.map(logs => (
          <LogsDetails key={log.id} log={log} />
        ))}
      </div>
    );
  }
}

function LogsDetails({ logs }) {
  return (
    <Link to={`/movies/${logid}`}>
      <ActivityLogCard log={log} />
    </Link>
  );
}
