import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Authentication/axiosWithAuth";

const EditLog = props => {
  const [activity, setActivity] = useState({
    user_id: 2,
    name: "",
    description: ""
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`/activities/${localStorage.user}/${props.match.params.id}`)
      .then(res => {
        setActivity(res.data);

        console.log(res.data);
      })
      .catch(err => console.log(err.response));
  }, [props.match.params.id]);

  const handleChange = e => {
    setActivity({
      ...activity,
      [e.target.name]: [e.target.value]
    });
  };
  console.log(activity);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`activities/${localStorage.user}/${props.match.params.id}`, activity)
      .then(res => {
        props.updateActivity(res.data);
        props.history.push("/");
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
          type="textarea"
          name="description"
          onChange={handleChange}
          placeholder="Description"
          value={activity.description}
        />
        <div className="baseline" />

        <button className="md-button update-button">Update</button>
      </form>
    </div>
  );
};

export default EditLog;
