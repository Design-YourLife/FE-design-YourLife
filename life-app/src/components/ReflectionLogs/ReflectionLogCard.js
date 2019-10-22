import React from "react";

const ReflectionLogCard = props => {
  const { id, date, outcomes, description, reflecetion } = props.logs;
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
      <h3>User Input</h3>

      {logs.map(reflection => (
        <div key={id} className="movie-star">
          {reflection}
        </div>
      ))}
    </div>
  );
};

export default ReflectionLogCard;
