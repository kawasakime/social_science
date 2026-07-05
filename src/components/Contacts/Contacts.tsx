import React from "react";

import Oferta from '../../assets/Приказ_02-97-169 от 18.04.2022 Оферта.pdf'
import { contacts } from "../../data/site";

interface Props {
  children: React.ReactNode;
}

const Contacts = ({ children }: Props) => {
  return (
    <section id="contacts">
      <div className="wrapper">
        <h1>{contacts.title}</h1>
        <p>{contacts.organization}</p>
        <br />
        <p>{contacts.department}</p>
        <br />
        <p>
          <b>Контактное лицо</b> – <b className="contact-person">{contacts.contactPerson}</b>
        </p>
        <p>
          <b>E-mail:</b> <span>{contacts.email}</span> <br />{" "}
          <b>тел.:</b> {contacts.phone}, <b>каб</b> {contacts.room}
          <br />
          <b>Адрес:</b> {contacts.address}
        </p>
      </div>
      {children}
      <a className="oferta" download href={Oferta}>Публичная оферта</a>
    </section>
  );
};
export default Contacts;
