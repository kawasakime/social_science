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
  const links = linkIsString ? [link] : link;

  return (
    <div className="conference-item">
      <div className="number">{number}</div>
      <div className="content">
        <h2>{year}</h2>
        <p>{title}</p>
        <div className="collection-links">
          {links.map((href, index) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" download>
              <span>PDF</span>
              {links.length === 1 ? "Сборник материалов" : `Сборник материалов ${index + 1}`}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConferenceItem;
