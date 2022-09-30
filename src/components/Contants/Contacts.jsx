import React from "react";

const Contacts = ({children}) => {
  return (
    <section id="contacts">
      <h1>Наши контакты</h1>
      <p></p>
      <p>
        <b>Адрес:</b> г. Ростов-на-Дону, ул. Пушкинская, д. 70/54
        <br />
        <b>Сайт:</b> <a href="http://uriu.ranepa.ru/" target="blank">http://uriu.ranepa.ru/</a>{" "}
      </p>
      {children}
    </section>
  );
};
export default Contacts;
