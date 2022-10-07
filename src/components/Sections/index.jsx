import React from "react";
import SectionsDesignationItem from "./SectionsDesignationItem";
import Button from "../UI/Button";

import file from "../../assets/SOCIAL_SCIENCE.pdf";

const sections = [
  "Стратегии развития общества и экономики в новой реальности",
  "Современные тренды экономического развития: национальные цели и приоритеты",
  "Модернизация государственного и корпоративного управления в целях обеспечения стратегической устойчивости",
  "Правовое регулирование устойчивого развития территориальных и отраслевых экосистем",
  "Политические институты, процессы и технологии в современных условиях",
  'Результаты исследовательских работ стажеров-исследователей в рамках проекта "Методика создания исследовательских Консорциумов развития и использования потенциала молодых ученых в системе публичной власти" в рамках стратегического проекта "Академия будущего-для будущего России!" программы стратегического академического лидерства «Приоритет 2030»',
];

const titleColumn = (i) => {
  return {
    gridColumn: i % 2 === 0 ? `1/2` : `3/4`,
    gridRow: `${i + 1}/${i + 2}`,
    textAlign: i % 2 === 0 ? "right" : "left",
  };
};

const designationRow = (i) => {
  return {
    gridRow: `${i + 1}/${i + 2}`,
  };
};

const Sections = () => {
  return (
    <section id="sections">
      <div className="wrapper">
        <h1>Секции Конференции</h1>
        <div className="sections__block">
          {sections.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <h2 style={titleColumn(i)}>{item}</h2>
                <SectionsDesignationItem
                  style={designationRow(i)}
                  number={i === 0 ? "Пленарное заседание" : i}
                  last={i === sections.length - 1 ? true : false}
                />
              </React.Fragment>
            );
          })}
        </div>
        <Button link={file} text="Информационное письмо" />
      </div>
    </section>
  );
};

export default Sections;
