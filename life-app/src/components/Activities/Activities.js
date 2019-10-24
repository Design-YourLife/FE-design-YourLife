import React, { useEffect, useState } from "react";
import { axiosWithAuth } from '../Authentication/axiosWithAuth';
import ActivityCard from "./ActivityCard";

export default function ActivityList() { 
  
  const [Activity, setActivity] = useState([])

  useEffect( async () => {
    await axiosWithAuth()
      .get(`/activities/${ localStorage.user } / ${ localStorage.userid }`)
      .then(res => {
        setActivity(res.data);
        console.log(res.data);
        // console.log(props);
      })
      .catch(err => console.log(err.response));
  }, []);

  console.log(Activity);

  return (
    <section className="activity-list">
      {Activity.map(Activity => {
        return <ActivityCard activity={Activity} key={Activity.id} />;
      })}
    </section>
  );
}
