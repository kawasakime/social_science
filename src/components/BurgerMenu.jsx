import React from "react";
import { BurgerContext } from "../App";

import file from "../assets/SOCIAL_SCIENCE.pdf";

const BurgerMenu = ({ ref }) => {
  const { burgerIsOpen, setBurgerIsOpen } = React.useContext(BurgerContext);

  function handleClickCloseBurgerBtn() {
    setBurgerIsOpen(false);
  }

  const list = [
    {
      link: "",
      title: "Регистрация (будет доступна в августе 2023 года)",
    },
    // {
    //   link: file,
    //   title: "Информационное письмо",
    // },
    {
      link: "#sections",
      title: "История конференции",
    },
    {
      link: "#committee",
      title: "Программный комитет",
    },
    {
      link: "#requirements",
      title: "Требования к оформлению тезисов",
    },
    {
      link: "#contacts",
      title: "Контакты",
    },
  ];

  return (
    <div className={`burger-menu${burgerIsOpen ? " active" : undefined}`} ref={ref}>
      <div className="bg"></div>
      <div className="burger-menu__panel">
        <div className="close" onClick={handleClickCloseBurgerBtn}></div>
        <ul>
          {list.map((item, i) => (
            <li key={i} onClick={handleClickCloseBurgerBtn}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
