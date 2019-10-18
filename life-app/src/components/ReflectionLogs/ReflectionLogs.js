import React, { useEffect, useState } from "react";
import { axiosWithAuth } from '../Authentication/axiosWithAuth';
import ReflectionLogCard from './ReflectionLogCard';


export default function ReflectionLogs () {
    const [ reflectionLogs, setReflectionLogs ] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get(`https://bw-designyourlife-api.herokuapp.com/api/reflection-logs/user`)
        .then(res => {
            console.log("Reflection Log: ", res.data.reflectionLogs);
            setReflectionLogs(res.data.reflectionLogs);
        });
    }, [])
    return (
        <div className="reflection-logs">
            {reflectionLogs.map(log => {
                return <ReflectionLogCard log={log} key={log.id} />
            })}
        </div>
    )
};