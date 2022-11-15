import React from "react";
import SectionsDesignationItem from "./SectionsDesignationItem";
import Button from "../UI/Button";

import file from "../../assets/SOCIAL_SCIENCE.pdf";
import { conferencesInfo } from "../../data/conferences";
import Accordion from "../PastConferences/Accordion";

const sections = [
  {
    year: "2022",
    title:
      "IV МЕЖДУНАРОДНАЯ НАУЧНО-ПРАКТИЧЕСКАЯ КОНФЕРЕНЦИЯ «SOCIAL SCIENCE» (Общественные науки) «СТРАТЕГИИ РАЗВИТИЯ ОБЩЕСТВА И ЭКОНОМИКИ В НОВОЙ РЕАЛЬНОСТИ»",
  },
  {
    year: "2021",
    title:
      "III МЕЖДУНАРОДНАЯ НАУЧНО-ПРАКТИЧЕСКАЯ КОНФЕРЕНЦИЯ «SOCIAL SCIENCE» (Общественные науки) «СОВРЕМЕННЫЕ СТРАТЕГИИ УСТОЙЧИВОГО РАЗВИТИЯ ГОСУДАРСТВА И ОБЩЕСТВА В КОНТЕКСТЕ ГЛОБАЛЬНЫХ ВЫЗОВОВ»",
  },
  {
    year: "2020",
    title:
      "II МЕЖДУНАРОДНАЯ НАУЧНО-ПРАКТИЧЕСКАЯ КОНФЕРЕНЦИЯ «SOCIAL SCIENCE» (Общественные науки) «СОЦИАЛЬНЫЕ ИНСТИТУТЫ В ЦИФРОВОЙ СРЕДЕ (SIDE)»",
  },
  {
    year: "2019",
    title:
      "I МЕЖДУНАРОДНАЯ НАУЧНО-ПРАКТИЧЕСКАЯ КОНФЕРЕНЦИЯ «SOCIAL SCIENCE» (Общественные науки)",
  },
  // "Стратегии,развития общества и экономики в новой реальности",
  // "Современные тренды экономического развития: национальные цели и приоритеты",
  // "Модернизация государственного и корпоративного управления в целях обеспечения стратегической устойчивости",
  // "Правовое регулирование устойчивого развития территориальных и отраслевых экосистем",
  // "Политические институты, процессы и технологии в современных условиях",
  // 'Результаты исследовательских работ стажеров-исследователей в рамках проекта "Методика создания исследовательских Консорциумов развития и использования потенциала молодых ученых в системе публичной власти" в рамках стратегического проекта "Академия будущего-для будущего России!" программы стратегического академического лидерства «Приоритет 2030»',
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
        <h1>История конференции</h1>
        <div className="sections__block">
          {sections.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <h2 style={titleColumn(i)}>{item.title}</h2>
                <SectionsDesignationItem
                  style={designationRow(i)}
                  number={item.year}
                  last={i === sections.length - 1 ? true : false}
                />
              </React.Fragment>
            );
          })}
        </div>
        {/* <Button link={file} text="Информационное письмо" /> */}
        <div className="info">
          {conferencesInfo.map((item, i) => (
            <Accordion key={i} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sections;
