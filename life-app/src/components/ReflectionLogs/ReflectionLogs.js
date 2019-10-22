import React, { useState, useEffect, Fragment } from "react";
import { axiosWithAuth } from "../Authentication/axiosWithAuth";
import moment from "moment";

const ReflectionLogs = props => {
  console.log(props);
  const [ reflectionLogs, setReflectionLogs ] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/reflection-logs/${localStorage.user}/${localStorage.userid}`)
      .then(res => {
        setReflectionLogs(res.data);
        console.log(res.data);
      })
      .catch(err => console.log("ERROR IN REFLECTION LOGS AXIOS", err));
  }, []);

  return (
    <Fragment>
      <h2>Reflection Logs</h2>
      <button>Add </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>CREATE DATE</th>
            <th>DESCRIPTION</th>

            <th />
          </tr>
        </thead>
        <tbody>
          {reflectionLogs==0 ? reflectionLogs.map(reflection => (
            <tr key={reflection.id}>
              <td>{reflection.id}</td>

              <td>{moment(reflection.date).calendar()}</td>
              <td>{reflection.outcomes}</td>

              <td>
                <button className="btn btn-primary btn-sm">DETAILS</button>
                <button className="btn btn-primary btn-sm">EDIT</button>
                <button className="btn btn-danger btn-sm">DELETE</button>
              </td>
            </tr>
          )) : (<p>Please add a reflection</p>)}
        </tbody>
      </table>
    </Fragment>
  );
};
export default ReflectionLogs;
