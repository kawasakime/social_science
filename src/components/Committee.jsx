import React from "react";

import { committeeList } from "../utils/committeeList";
import CommitteeItem from "./CommitteeItem";

const Committee = () => {
  return (
    <section id="committee">
      <div className="wrapper">
        <h1>Программный комитет симпозиума</h1>
        <div className="committee-list">
          {committeeList.map((item, i) => (
            <CommitteeItem
              imgUrl={`../assets/img/committee/${i + 1}.jpg`}
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
