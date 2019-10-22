import React from 'react';
import { Card } from 'semantic-ui-react';

export class ReflectionLogCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // log: this.props.log
        }
    }

    render(){
        console.log("rendering a card");
        return (
        <div className="reflection-card">
            <Card 
            // header={log.log.user_id}
            // meta={log.log.id}
            // description={log.log.reflection}
            // extra={log.log.date}
            />
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )}
};