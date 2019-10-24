import React, { Component } from "react";
import { axiosWithAuth } from "../Authentication/axiosWithAuth";

class Activityform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: 2,
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
        this.props.history.push("/activities");
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const { user_id, name, description } = this.state;

    return (
      <div className="container post-form">
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
          <div class="form-group">
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Activityform;
