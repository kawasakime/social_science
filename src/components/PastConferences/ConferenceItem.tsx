import React from "react";
import type { DocumentLink } from "../../data/types";

interface Props {
  year: number;
  title: string;
  number: number;
  link: DocumentLink;
}

const ConferenceItem = ({ year, title, number, link }: Props) => {
  const linkIsString = typeof link === "string";

  const href = linkIsString ? link : link[0];

  const onClick = () => {
    if (!linkIsString) {
      link.slice(1).forEach((item) => window.open(item));
    }
  };

  return (
    <div className="conference-item">
      <div className="number">{number}</div>
      <div className="content">
        <h2>{year}</h2>
        <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
    </div>
  );
};

export default ConferenceItem;
