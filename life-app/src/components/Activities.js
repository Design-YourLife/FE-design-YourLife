import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ActivityList() {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    axios
      .get(`https://bw-designyourlife-api.herokuapp.com/api/activities/`)
      .then(res => {
        console.log("Activity: ", res.activity);
        setActivity(res.activity);
      });
  }, []);
}
