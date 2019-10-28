import React, { useState, useEffect, Fragment } from "react";
import { axiosWithAuth } from "../Authentication/axiosWithAuth";
import moment from "moment";
import { Route, Redirect, Link } from "react-router-dom";

const ActivityDisplay = props => {
  console.log(props);
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/activities/${localStorage.user}`)
      .then(res => {
        setActivityList(res.data);

        console.log(res.data[0]);
      })
      .catch(err => console.log(err.response));
  }, []);

  return (
    <Fragment>
      <h2>Activity Logs</h2>
      <Link to="/activity/add" className="btn btn-primary btn-sm">
        Add Log
      </Link>

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
                <Link
                  to={{ pathname: `/activity/edit`, state: activity.id }}
                  className="btn btn-primary btn-sm"
                >
                  Edit
                </Link>
              </td>
              <td>
                <Link
                  to={{ pathname: `activity/delete`, state: activity.id }}
                  onClick={() => document.location.reload(true)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
export default ActivityDisplay;
