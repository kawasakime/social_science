import React from "react";
import { CalendarClock, QrCode } from "lucide-react";
import Button from "./UI/Button";

import QR from "../assets/img/qr.png";
import { keyDates, REGISTRATION_LINK } from "../data/site";

const Deadline = () => {
  return (
    <section id="deadline">
      <div className="wrapper">
        <h1>Ключевые даты</h1>
        <div className="dates-list">
          {keyDates.map((item, index) => (
            <article key={item.title} className="dates-list__item">
              <div className="dates-list__content">
                <div>
                  <CalendarClock aria-hidden="true" size={24} strokeWidth={1.8} />
                  <h4>{item.title}</h4>
                </div>
                <p>
                  {item.text}
                  {item.registrationLink && (
                    <>
                      {" "}
                      <a className="registration-link" href={REGISTRATION_LINK}>
                        {REGISTRATION_LINK}
                      </a>
                      .
                    </>
                  )}
                  {item.qr && (
                    <span className="dates-list__qr">
                      <QrCode aria-hidden="true" size={18} strokeWidth={1.9} />
                      <img src={QR} alt="QR-код для регистрации" />
                    </span>
                  )}
                </p>
              </div>
            </article>
          ))}
        </div>
        <Button link={REGISTRATION_LINK} text="Регистрация" />
      </div>
    </section>
  );
};

export default Deadline;
