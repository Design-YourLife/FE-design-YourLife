import React, { useState, useEffect, Fragment } from "react";
import { axiosWithAuth } from "../Authentication/axiosWithAuth";
import moment from "moment";

const ActivityLogs = props => {
  console.log(props);
  const [activityLogs, setActivityLogs] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/activity-logs/${localStorage.user}`)
      .then(res => {
        setActivityLogs(res.data);
        console.log(res.data);
        console.log(props);
      })
      .catch(err => console.log(err.response));
  }, []);

  const deleteLog = id => {
    axiosWithAuth()
      .delete(`/activity-logs/${localStorage.user}`, { params: { id: 3 } })
      .then(res => {
        console.log(res.data);
        //this.props.history.push("/");
      })
      .catch(err => console.log(err.response));
  };

  return (
    <Fragment>
      <h2>Activity Logs</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>USERID</th>
            <th>CREATE DATE</th>
            <th>DESCRIPTION</th>

            <th />
          </tr>
        </thead>
        <tbody>
          {activityLogs.map(activity => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.id}</td>
              <td>{moment(activity.date).calendar()}</td>
              <td>{activity.outcomes}</td>

              <td>
                <button className="btn btn-primary btn-sm">EDIT</button>
                <button onClick={deleteLog} className="btn btn-danger btn-sm">
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
export default ActivityLogs;
