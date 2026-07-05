import React from "react";

import example from "../assets/ТРЕБОВАНИЯ К ОФОРМЛЕНИЮ МАТЕРИАЛОВ.docx";
import { requirements } from "../data/site";

const Requirements = () => {
  return (
    <section id="requirements">
      <div className="wrapper">
        <h1>Требования к оформлению материалов конференции</h1>

        <ul className="requirements-list">
          {requirements.map((item) => (
            <li key={item.title}>
              <b>{item.title}</b> {item.text}
            </li>
          ))}
        </ul>

        <a href={example} download className="example-link">
          Образец оформления тезисов
        </a>
      </div>
    </section>
  );
};

export default Requirements;
