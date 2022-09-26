import React from "react";
import SectionsDesignationItem from "./SectionsDesignationItem";
import Button from "./UI/Button";

import file from '../assets/SOCIAL_SCIENCE.pdf'

const sections = [
  "Стратегии развития общества и экономики в новой реальности",
  "Современные тренды экономического развития: национальные цели и приоритеты",
  "Модернизация государственного и корпоративного управления в целях обеспечения стратегической устойчивости",
  "Правовое регулирование устойчивого развития территориальных и отраслевых экосистем",
  "Политические институты, процессы и технологии в современных условиях",
];

const titleColumn = (i) => {
  return {
    gridColumn: i % 2 === 0 ? `1/2` : `3/4`,
    gridRow: `${i+1}/${i+2}`,
    textAlign: i % 2 === 0 ? 'right' : 'left'
  }
}

const designationRow = (i) => {
  return {
    gridRow: `${i+1}/${i+2}`
  }
}

const Sections = () => {
  return (
    <section id="sections">
      <div className="wrapper">
        <h1>Секции симпозиума</h1>
        <div className="sections__block">
          {sections.map((item, i) => {
            return (
              <>
                <h2 style={titleColumn(i)}>{item}</h2>
                <SectionsDesignationItem style={designationRow(i)} number={i+1} last={i === sections.length-1 ? true : false}/>
              </>
            );
          })}
        </div>
        <Button link={file} text='Информационное письмо'/>
      </div>
    </section>
  );
};

export default Sections;
