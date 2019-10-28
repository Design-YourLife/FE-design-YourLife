//Add activity form
import React, { Component } from "react";
import { axiosWithAuth } from "../Authentication/axiosWithAuth";
import "./ActivityStyle.css";

class Activityform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axiosWithAuth()
      .post(`/activities/${localStorage.user}`, this.state)
      .then(response => {
        this.props.history.push("/activityLogs");
        localStorage.setItem("id", response.data.id);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const { name, description } = this.state;

    return (
      <div className="a-container post-form">
        <h1>ADD ACTIVITY</h1>
        <div className="inputGroup">
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <label for="exampleFormControlInput1">ACTIVITY NAME</label>
              <input
                className="form-control"
                id="exampleFormControlInput1"
                type="text"
                name="name"
                placeholder="Enter Title (7 words or less)"
                value={name}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">
                ACTIVITY DESCRIPTION
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="description"
                placeholder="Log activity here"
                onChange={this.changeHandler}
                value={description}
                rows="4"
              ></textarea>
            </div>
            <button className="btn-activity" type="submit">
              SAVE
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Activityform;
