import React from "react";
import Organizers from "./Organizers";
import { info, supportLinks } from "../data/site";

const Info = () => {
  return (
    <section id="info">
      <div className="wrapper">
        <h1>{info.title}</h1>
        <p>
          <span>
            <b>Цель конференции:</b>
          </span>{" "}
          {info.goal}
        </p>
        <br />
        <Organizers />
        <br />
        <ul>
          <h1>
            <b>{info.supportTitle}</b>
          </h1>
          {supportLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.title} {item.bold && <b>{item.bold}</b>}
              </a>
            </li>
          ))}
        </ul>
        <p className="publication-note">{info.publicationNote}</p>
      </div>
    </section>
  );
};

export default Info;
