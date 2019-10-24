import React, { useState, useEffect, Fragment } from "react";
import { axiosWithAuth } from "../Authentication/axiosWithAuth";
import moment from "moment";
import { Routes, Redirect } from "react-router-dom";

const Activities = props => {
  console.log(props);
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/activities/${localStorage.user}`)
      .then(res => {
        setActivityList(res.data);

        console.log(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);

  return (
    <Fragment>
      <div className="container">
        <h2>Activity List Component</h2>

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
export default Activities;
