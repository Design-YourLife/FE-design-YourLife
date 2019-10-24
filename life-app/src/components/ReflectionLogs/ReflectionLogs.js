import React, { useState, useEffect, Fragment } from "react";
import { axiosWithAuth } from "../Authentication/axiosWithAuth";
import moment from "moment";
import { Add, Edit, Delete } from './add-edit-delete';
import { Route, Link } from 'react-router-dom';

const ReflectionLogs = props => {
//   console.log(props);
  const [ reflectionLogs, setReflectionLogs ] = useState([]);


  const setLogs = (log) => {
    return setReflectionLogs(log);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/reflection-logs/${localStorage.user}`) ///${localStorage.userid}
      .then(res => {
        setReflectionLogs(res.data.reflectionLogs);
        // console.log("RES: ", res.data);
      })
      .catch(err => console.log("ERROR IN REFLECTION LOGS AXIOS", err));
  }, []);
  return (
    <Fragment>
      <h2>Reflection Logs</h2>
      <Link to='/reflections/add' className="btn btn-primary btn-sm">Add Log</Link>
      <Route exact path="/reflections/edit" component={() => <Edit reflectionLogs={setLogs}/>}/>
      <Route exact path="/reflections/add" component={() => <Add reflectionLogs={setLogs} />} /> 
      <Route exact path="/reflections/delete" component={() => <Delete {...props} />} />
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
          {reflectionLogs.length>0 ? (reflectionLogs.map(reflection => (
            <tr key={reflection.id}>
              <td>{reflection.id}</td>

              <td>{moment(reflection.date).calendar()}</td>
              <td>{reflection.reflection}</td>

              <td>
                <Link to={{pathname: `/reflections/edit`, state: reflection.id }} className="btn btn-primary btn-sm">Edit</Link>
                <Link to={{pathname: `reflections/delete`, state: reflection.id }} onClick={() => document.location.reload(true)} className="btn btn-primary btn-sm">Delete</Link>
              </td>
            </tr>
          ))) : (<p>Please add a reflection</p>)}
        </tbody>
      </table>
    </Fragment>
  );
};
export default ReflectionLogs;
