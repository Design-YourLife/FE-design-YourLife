import React, { useEffect, useState } from "react";
import { axiosWithAuth } from '../Authentication/axiosWithAuth';

export default function ActivityList() {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`https://bw-designyourlife-api.herokuapp.com/api/activities/`)
      .then(res => {
        console.log("Activity: ", res.activity);
        setActivity(res.activity);
      });
  }, []);

  return (
    <div className="activity-list">
      
    </div>
  )
};
