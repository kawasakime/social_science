import React from "react";
import ConferenceItem from "./ConferenceItem";

const conferences = [
  {
    year: 2019,
    title:
      "Сборник трудов по итогам международной научно-практическая конференции «Social Science (Общественные науки)» (27 сентября 2019 г.)",
  },
  {
    year: 2020,
    title:
      "Сборник трудов по итогам II международной научно-практическая конференции «Social Science (Общественные науки)» (19, 20 ноября 2020 г.)",
  },
  {
    year: 2021,
    title:
      "Сборник трудов III международной научно-практической конференции «SOCIAL SCIENCE (общественные науки)",
  },
];

const PastConferences = () => {
  return (
    <section id="past-conferences">
      <div className="wrapper">
        <h1>Сборники прошлых конференций</h1>
        <div className="container">
          {conferences.map((item, i) => (
            <ConferenceItem
              key={i}
              year={item.year}
              title={item.title}
              number={i + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastConferences;
