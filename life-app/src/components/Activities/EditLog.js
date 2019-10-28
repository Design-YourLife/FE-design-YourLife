import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Authentication/axiosWithAuth";

const EditLog = props => {
  console.log(props);
  const [activity, setActivity] = useState({
    name: "",
    description: "",
    id: props.id,
    user_id: props.user_id
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`/activities/${localStorage.user}/${props.match.params.id}`)
      .then(res => {
        setActivity(res.data[0]);

        console.log(res.data[0]);
      })
      .catch(err => console.log(err.response));
  }, [props.match.params.id]);

  const handleChange = e => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value
    });
  };
  console.log(activity);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`activities/${localStorage.user}`, activity, {
        body: { id: props.match.params.id }
      })

      .then(res => {
        props.history.push("/list");
        console.log(this.state);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div>
      <h2>Update Activity</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Title"
          value={activity.name}
        />
        <div className="baseline" />

        <input
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="Description"
          value={activity.description}
        />
        <div className="baseline" />

        <button className="md-button update-button">Update</button>

        <div className="baseline" />
      </form>
    </div>
  );
};

export default EditLog;
