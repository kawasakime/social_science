import React from "react";
import { Building2, FileText, Mail, MapPin, Phone, UserRound } from "lucide-react";

import Oferta from '../../assets/Приказ_02-97-169 от 18.04.2022 Оферта.pdf'
import { contacts } from "../../data/site";

interface Props {
  children: React.ReactNode;
}

const Contacts = ({ children }: Props) => {
  return (
    <section id="contacts">
      <div className="wrapper">
        <div className="contacts-card">
          <div className="contacts-card__intro">
            <span>Связаться</span>
            <h1>{contacts.title}</h1>
            <p>{contacts.organization}</p>
          </div>
          <div className="contacts-grid">
            <div className="contacts-grid__item contacts-grid__item--wide">
              <Building2 aria-hidden="true" size={24} strokeWidth={1.8} />
              <div>
                <span>Подразделение</span>
                <b>{contacts.department}</b>
              </div>
            </div>
            <div className="contacts-grid__item">
              <UserRound aria-hidden="true" size={24} strokeWidth={1.8} />
              <div>
                <span>Контактное лицо</span>
                <b>{contacts.contactPerson}</b>
              </div>
            </div>
            <div className="contacts-grid__item">
              <Mail aria-hidden="true" size={24} strokeWidth={1.8} />
              <div>
                <span>E-mail</span>
                <b>{contacts.email}</b>
              </div>
            </div>
            <div className="contacts-grid__item">
              <Phone aria-hidden="true" size={24} strokeWidth={1.8} />
              <div>
                <span>Телефон, кабинет</span>
                <b>{contacts.phone}, каб. {contacts.room}</b>
              </div>
            </div>
            <div className="contacts-grid__item">
              <MapPin aria-hidden="true" size={24} strokeWidth={1.8} />
              <div>
                <span>Адрес</span>
                <b>{contacts.address}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
      <a className="oferta" download href={Oferta}>
        <FileText aria-hidden="true" size={18} strokeWidth={1.8} />
        Публичная оферта
      </a>
    </section>
  );
};
export default Contacts;
