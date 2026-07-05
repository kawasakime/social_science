import React from "react";
import { ExternalLink } from "lucide-react";
import Organizers from "./Organizers";
import { info, supportLinks } from "../data/site";

const Info = () => {
  return (
    <section id="info">
      <div className="wrapper">
        <div className="info-intro">
          <h1>{info.title}</h1>
          <p>
            <span>
              <b>Цель конференции:</b>
            </span>{" "}
            {info.goal}
          </p>
        </div>
        <Organizers />
        <div className="support-block">
          <h1>
            <b>{info.supportTitle}</b>
          </h1>
          <ul>
            {supportLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <span>
                    {item.title} {item.bold && <b>{item.bold}</b>}
                  </span>
                  <ExternalLink aria-hidden="true" size={18} strokeWidth={1.8} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="publication-note">{info.publicationNote}</p>
      </div>
    </section>
  );
};

export default Info;
