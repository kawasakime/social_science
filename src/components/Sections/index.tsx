import React from "react";
import SectionsDesignationItem from "./SectionsDesignationItem";

import { conferences } from "../../data/conferences";
import { historySections } from "../../data/site";
import Accordion from "../PastConferences/Accordion";

const titleColumn = (i: number): React.CSSProperties => {
  return {
    gridColumn: i % 2 === 0 ? `1/2` : `3/4`,
    gridRow: `${i + 1}/${i + 2}`,
    textAlign: i % 2 === 0 ? "right" : "left"
  };
};

const designationRow = (i: number): React.CSSProperties => {
  return {
    gridRow: `${i + 1}/${i + 2}`,
  };
};

const Sections = () => {
  return (
    <section id="sections">
      <div className="wrapper">
        <h1>История конференции</h1>
        <div className="sections__block">
          {historySections.map((item, i) => {
            return (
              <React.Fragment key={item.year}>
                <h2 style={titleColumn(i)}>{item.title}</h2>
                <SectionsDesignationItem
                  style={designationRow(i)}
                  number={item.year}
                  last={i === historySections.length - 1}
                />
              </React.Fragment>
            );
          })}
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
