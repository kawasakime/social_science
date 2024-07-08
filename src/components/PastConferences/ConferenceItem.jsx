import React from "react";

const ConferenceItem = ({ year, title, number, link }) => {
  const linkIsString = typeof link === 'string';

  const href = linkIsString ? link : link[0]

  const onClick = () => {
    if (!linkIsString) {
      window.open(link[1])
    }
  }

  return (
    <div className="conference-item">
      <div className="number">{number}</div>
      <div className="content">
        <h2>{year}</h2>
        <a href={href} onClick={onClick} target="blank">{title}</a>
      </div>
    </div>
  );
};

export default ConferenceItem;
