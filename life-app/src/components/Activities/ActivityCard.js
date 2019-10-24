import React from "react";
import { Card } from "semantic-ui-react";

export default function ActivityCard({ act, activity }) {

  console.log(activity);

  return (
    <Card>
      <Card.Content>
        <h1>Name:</h1>{activity.name}
      </Card.Content>
      <Card.Content>
        <h1>ID:</h1>{activity.id}
      </Card.Content>
      <Card.Content>
        <h1>User ID:</h1>{activity.user_id}
      </Card.Content>
      <Card.Content>
        <h1>Description:</h1>{activity.description}
      </Card.Content>
    </Card>
  );
}
