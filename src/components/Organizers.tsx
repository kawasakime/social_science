import React from "react";
import { coOrganizers, mainOrganizer } from "../data/site";

const Organizers = () => {
  return (
    <>
      <div className="organizers">
        <h1>Организатор</h1>
        <p>{mainOrganizer.title}</p>
        <span>{mainOrganizer.location}</span>
      </div>
      <div className="so-organizers">
        <h1>Соорганизаторы</h1>
        <div className="so-organizers__container">
          {coOrganizers.map((item) => (
            <div key={item.title} className="so-organizers__item">
              <img src={item.logo} alt={item.title} />
              <p>{item.title}</p>
              <span>{item.location}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Organizers;
