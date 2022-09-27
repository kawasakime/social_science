import React from "react";

const ConferenceItem = ({ year, title, number }) => {
  return (
    <div className="conference-item">
      <div className="number">{number}</div>
      <div className="content">
        <h2>{year}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ConferenceItem;
