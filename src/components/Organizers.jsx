import React from "react";

const organizers = [
  {
    title: "Евразийский национальный университет имени Л.Н. Гумилева",
    location: "(Казахстан, г. Астана)",
  },
  {
    title: "Университет социальных наук ",
    location: "(Турция, Анкара)",
  },
  {
    title: "Южный федеральный университет ",
    location: "(Россия, г. Ростов-на-Дону)",
  },
  {
    title:
      "«Международный государственный экологический институт им. А.Д. Сахарова» Белорусского Государственного университета.",
    location: "(Республика Беларусь, г. Минск)",
  },
];

const Organizers = () => {
  return (
    <div className="so-organizers">
      <h1>Соорганизаторы</h1>
      <div className="so-organizers__container">
        {organizers.map((item, i) => (
          <div className="so-organizers__item">
            <img src={`./assets/img/so-organizers/${i + 1}.png`} alt="" />
            <p>{item.title}</p>
            <span>{item.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organizers;
