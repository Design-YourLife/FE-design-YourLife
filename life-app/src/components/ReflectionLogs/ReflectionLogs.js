import React, { useEffect, useState } from "react";
import { axiosWithAuth } from '../Authentication/axiosWithAuth';
import { ReflectionLogCard } from './ReflectionLogCard';


export default function ReflectionLogs () {
    const [ reflectionLogs, setReflectionLogs ] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axiosWithAuth()
        .get("/activities/testUser", token)
        .then(res => {
            console.log("Reflection Logs: ", res.data);
            setReflectionLogs(res.data);
        });
    }, [])
    return (
        <div className="reflection-logs">
            <h1>Reflection Logs</h1>
            {reflectionLogs.map(log => {
                return <ReflectionLogCard log={log} key={log.id} />
            })}
        </div>
    )
};
