import React from "react";

const ActivityLogCard = props => {
  const { id, date, outcomes, description, activities } = props.logs;
  return (
    <div className="movie-card">
      <div className="movie-director">
        ID: <em>{id}</em>
      </div>
      <div className="movie-metascore">
        DATE: <strong>{date}</strong>
      </div>
      <div className="movie-metascore">
        OUTCOMES: <strong>{outcomes}</strong>
      </div>
      <h3>Activities</h3>

      {logs.map(activities => (
        <div key={id} className="movie-star">
          {activity}
        </div>
      ))}
    </div>
  );
};

export default ActivityLogCard;
