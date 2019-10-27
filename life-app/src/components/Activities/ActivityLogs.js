import React, { useState, useEffect, Fragment } from "react";
import { axiosWithAuth } from "../Authentication/axiosWithAuth";
import moment from "moment";
import { Routes, Redirect, Link } from "react-router-dom";

const ActivityLogs = props => {
  console.log(props);
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/activities/${localStorage.user}/${localStorage.id}`)
      .then(res => {
        setActivityList(res.data);

        console.log(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="header">
          <div className="header-container">
            <h2>
              ACTIVITY DETAILS
              <h6>
                <Link to="/list">Show All</Link>{" "}
                <Link to="/activity/add">Add Activity</Link>
              </h6>
            </h2>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>CREATE DATE</th>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th> </th>
              <th> </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {activityList.map(activity => (
              <tr key={activity.id} activity={activity}>
                <td>{moment(activity.created_at).calendar()}</td>
                <td>{activity.name}</td>
                <td>{activity.description}</td>

                <td>
                  <button className="btn btn-primary btn-sm">EDIT</button>
                </td>
                <td>
                  <button className="btn btn-danger btn-sm">DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
export default ActivityLogs;
