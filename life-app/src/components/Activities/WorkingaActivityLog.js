import React, { useState, useEffect, Fragment } from "react";
import { axiosWithAuth } from "../Authentication/axiosWithAuth";
import moment from "moment";
import { Routes, Redirect, Link } from "react-router-dom";
import "./ActivityStyle.css";

const WorkingActivityLog = props => {
  console.log(props);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/activities/${localStorage.user}/${localStorage.id}`)
      .then(res => {
        setActivity(res.data[0]);

        console.log(res.data[0]);
      })
      .catch(err => console.log(err.response));
  }, []);

  const deleteLog = () => {
    axiosWithAuth()
      .delete(
        `activities/${localStorage.user}`,

        {
          data: { id: localStorage.id }
        }
      )

      .then(res => {
        console.log(res);
        localStorage.setItem("id", "");
        props.history.push("/list");
      })
      .catch(err => console.log(err.response));
  };

  return (
    <Fragment>
      <div className="container table-container">
        <div className="header">
          <div className="header-container">
            <h1>ACTIVITY DETAILS</h1>
            <Link to="/list">Show All</Link>{" "}
            <Link to="/activity/add">Add Activity</Link>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr className="table-activity">
              <th>DATE</th>
              <th>ACTIVITY</th>
              <th>DESCRIPTION</th>
              <th> </th>
              <th> </th>
              <th />
            </tr>
          </thead>
          <tbody className="table-body">
            <tr key={activity.id} activity={activity}>
              <td>{moment(activity.created_at).calendar()}</td>
              <td>{activity.name}</td>
              <td>{activity.description}</td>

              <td>
                <button
                  onClick={() =>
                    props.history.push(
                      `/update-log/${localStorage.user}/${localStorage.id}`
                    )
                  }
                  className="btn btn-primary btn-sm"
                >
                  EDIT
                </button>
              </td>
              <td>
                <button onClick={deleteLog} className="btn btn-danger btn-sm">
                  DELETE
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
export default WorkingActivityLog;
