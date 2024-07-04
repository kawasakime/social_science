import React from "react";

import { committeeList } from "../../data/committeeList";
import CommitteeItem from "./CommitteeItem";

const Committee = () => {
  return (
    <section id="committee">
      <div className="wrapper">
        <h1>Программный комитет</h1>
        <div className="committee-list">
          {committeeList.map((item, i) => (
            <CommitteeItem
              key={i}
              imgUrl={`./assets/img/committee/${item.img}`}
              name={item.name}
              descr={item.descr}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committee;
