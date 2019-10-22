import React, { useEffect, useState } from "react";
import axios from "axios";
import ActivityCard from "./ActivityCard";

export default function ActivityList() {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    axios
      .get(`https://bw-designyourlife-api.herokuapp.com/api/`)
      .then(res => {
        console.log("Activity: ", res.activity);
        setActivity(res.activity);
      });
  }, []);

  return (
    <section className="activity-list">
      {activity.map(act => {
        return <ActivityCard key={act.id} />;
      })}
    </section>
  );
}
