import React from "react";
import ConferenceItem from "./ConferenceItem";

import { conferences } from "../../data/conferences";

const PastConferences = () => {
  return (
    <section id="past-conferences">
      <div className="wrapper">
        <h1>Сборники трудов конференции</h1>
        <div className="container">
          {conferences.map(
            (item, i) => (
              <ConferenceItem
                key={item.year}
                year={item.year}
                title={item.collectionTitle}
                number={i + 1}
                link={item.collectionLinks}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PastConferences;
