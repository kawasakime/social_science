import React from "react";
import { History } from "lucide-react";

import { conferences } from "../../data/conferences";
import { historySections } from "../../data/site";
import Accordion from "../PastConferences/Accordion";

const Sections = () => {
  return (
    <section id="sections">
      <div className="wrapper">
        <div className="section-heading">
          <History aria-hidden="true" size={30} strokeWidth={1.8} />
          <h1>История конференции</h1>
        </div>
        <div className="history-tree">
          {historySections.map((item, index) => (
            <div
              key={item.year}
              className={`history-tree__item history-tree__item--${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div className="history-tree__content" style={{gridRow: `${index}/${index + 1}`}}>
                <h2>{item.title}</h2>
              </div>
              <div className="history-tree__node" style={{gridRow: `${index}/${index + 1}`}}>
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="info">
          {conferences.map((item) => (
            <Accordion key={item.year} title={item.name} text={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sections;
