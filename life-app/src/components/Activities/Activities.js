import React, { useState, useEffect, Fragment } from "react";
import { axiosWithAuth } from "../Authentication/axiosWithAuth";
import moment from "moment";

const Activities = props => {
  console.log(props);
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/activities/${localStorage.user}/${localStorage.userid}`)
      .then(res => {
        setActivityList(res.data);
        console.log(res.data);
        console.log(props);
      })
      .catch(err => console.log(err.response));
  }, []);

  return (
    <Fragment>
      <h2>Activity List Component</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>CREATE DATE</th>

            <th />
          </tr>
        </thead>
        <tbody>
          {activityList.map(activity => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.name}</td>
              <td>{activity.description}</td>
              <td>{moment(activity.created_at).calendar()}</td>

              <td>
                <button className="btn btn-danger btn-sm">DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
export default Activities;
