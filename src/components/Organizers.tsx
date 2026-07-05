import React from "react";
import { Building2, Handshake } from "lucide-react";
import { coOrganizers, mainOrganizer } from "../data/site";

const Organizers = () => {
  return (
    <>
      <div className="organizers">
        <div className="organizers__card">
          <div className="organizers__icon">
            <Building2 aria-hidden="true" size={30} strokeWidth={1.8} />
          </div>
          <h1>Организатор</h1>
          <p>{mainOrganizer.title}</p>
          <span>{mainOrganizer.location}</span>
        </div>
      </div>
      <div className="so-organizers">
        <div className="so-organizers__heading">
          <Handshake aria-hidden="true" size={28} strokeWidth={1.8} />
          <h1>Соорганизаторы</h1>
        </div>
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
