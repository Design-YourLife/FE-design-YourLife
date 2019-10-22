import React from "react";
import axios from "axios";
import ActivityLogCard from "./ActivityLogCard";



export default class ActivityLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: null,
     
    };
  }
  
  componentDidMount() {
    this.fetchLog(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchLog(newProps.match.params.id);
    }
  }

  fetchLog = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ log: res.data }))
      .catch(err => console.log(err.response));
  };

 

  deleteLog = e => {
    e.preventDefault();
    axios
    .delete(`http://localhost:5000/api/movies/${this.props.match.params.id}`)
    .then(res => {
      this.props.updateLogs(res.data);
      this.props.history.push('/');
    })
    .catch(err => console.log(err.response)) 
  };
