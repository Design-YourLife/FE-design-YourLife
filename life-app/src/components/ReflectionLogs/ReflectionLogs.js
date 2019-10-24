import React, { useState, useEffect, Fragment } from "react";
import { axiosWithAuth } from "../Authentication/axiosWithAuth";
import moment from "moment";
import { Add, Edit } from './add-edit';
import { Route, Link } from 'react-router-dom';

const ReflectionLogs = props => {
//   console.log(props);
  const [ reflectionLogs, setReflectionLogs ] = useState([]);


  const setLogs = (log) => {
    return setReflectionLogs(log);
  };

  const Delete = (id) => {
    axiosWithAuth()
      .delete(`reflection-logs/${localStorage.user}`, {"id": id})
      .then(res => console.log(id + "Successfully Deleted", res))
      .catch(err => console.log(id + "has not been deleted: ", err.message))
    console.log("Delete button was pressed: " + id);
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
      <Route exact path="/reflections/edit" component={() => <Edit setLogs={setLogs}/>}/>
      <Route exact path="/reflections/add" component={() => <Add setLogs={setLogs} />} /> 
      {/* <Route exact path="/reflections/delete" component={Delete} /> */}
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
                <Link to={{pathname: `/reflections/edit`, state: { id: reflection.id } }} className="btn btn-primary btn-sm">Edit</Link>
                {/* <Link to={{pathname: `reflections/delete`, state: { id: reflection.id } }} className="btn btn-primary btn-sm">Delete</Link> */}
                <button onClick={() => Delete(reflection.id)} className="btn btn-primary btn-sm">Delete</button> 
              </td>
            </tr>
          ))) : (<p>Please add a reflection</p>)}
        </tbody>
      </table>
    </Fragment>
  );
};
export default ReflectionLogs;



// onClick={() => document.location.reload(true)}