import React from "react";

import Oferta from '../../assets/Приказ_02-97-169 от 18.04.2022 Оферта.pdf'

const Contacts = ({ children }) => {
  return (
    <section id="contacts">
      <div className="wrapper">
        <h1>Наши контакты</h1>
        <p>
          Южно-Российский институт управления – филиал федерального
          государственного бюджетного образовательного учреждения высшего
          образования «Российская академия народного хозяйства и государственной
          службы при Президенте Российской Федерации»
        </p>
        <br />
        <p>Научно-организационный отдел</p>
        <br />
        <p>
          <b>Контактное лицо</b> – <b style={{fontWeight: 600}}>Долгашова Юлия Олеговна</b>
        </p>
        <p>
          <b>E-mail:</b> <span>dolgashova-yo@ranepa.ru</span> <br />{" "}
          <b>тел.:</b> 8 (863) 270-07-44, <b>каб</b> 812
          <br />
          <b>Адрес:</b> г. Ростов-на-Дону, ул. Пушкинская, д. 70/54
        </p>
      </div>
      {children}
      <a className="oferta" download href={Oferta}>Публичная оферта</a>
    </section>
  );
};
export default Contacts;
