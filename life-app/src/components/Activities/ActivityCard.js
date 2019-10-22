import React from "react";
import { Card } from "semantic-ui-react";

export default function ActivityCard({ act }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{act.name}</Card.Header>
      </Card.Content>
    </Card>
  );
}
