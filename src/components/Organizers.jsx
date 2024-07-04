import React from "react";

const organizers = [
  {
    title: "Ферганский Государственный Университет",
    location: "(Республика Узбекистан, г. Фергана)",
  },
  {
    title: "Институт экономики — Карельский научный центр РАН",
    location: "(Россия, г. Петрозаводск)",
  },
  {
    title: "Южный федеральный университет ",
    location: "(Россия, г. Ростов-на-Дону)",
  },
  {
    title: "Абхазский Государственный университет",
    location: "(Республика Абхазия, г. Сухум)",
  },
  {
    title: "Университет социальных наук ",
    location: "(Турция, г. Анкара)",
  },
  {
    title: "Академия управления при Президенте Республики Беларусь ",
    location: "(Республика Беларусь, г. Минск)",
  },
];

const Organizers = () => {
  return (
    <>
      <div className="organizers">
        <h1>Организатор</h1>
        <p>
          Южно – Российский институт управления – филиал Российской академии
          народного хозяйства и государственной службы при Президенте Российской
          Федерации
        </p>
        <span>(г. Ростов-на-Дону)</span>
      </div>
      <div className="so-organizers">
        <h1>Соорганизаторы</h1>
        <div className="so-organizers__container">
          {organizers.map((item, i) => (
            <div key={i} className="so-organizers__item">
              <img src={`./assets/img/so-organizers/${i + 1}.png`} alt="" />
              <p>{item.title}</p>
              <span>{item.location}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Organizers;
