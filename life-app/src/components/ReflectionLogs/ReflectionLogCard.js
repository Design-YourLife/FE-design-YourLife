import React from 'react';
import { Card } from 'semantic-ui-react';

export default function ReflectionLogCard (log){
    console.log("Reflection Log from Card: ",log.log);
    return (
        <div className="reflection-card">
            <Card 
            header={log.log.user_id}
            meta={log.log.id}
            description={log.log.reflection}
            extra={log.log.date}
            />
        </div>
    )
};