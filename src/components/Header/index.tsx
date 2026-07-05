import React from "react";
import Timer from "./Timer";
import Button from "../UI/Button";
import { BurgerContext } from "../../App";
import { conference, REGISTRATION_LINK } from "../../data/site";

const Header = () => {
  const burgerRef = React.useRef<HTMLDivElement | null>(null);
  const { setBurgerIsOpen } = React.useContext(BurgerContext);

  function handleClickBurgerBtn() {
    setBurgerIsOpen(true);
  }

  return (
    <header className="header">
      <div className="header__top">
        <div
          ref={burgerRef}
          className="burger-menu__button"
          onClick={handleClickBurgerBtn}
        >
          <span></span>
        </div>
        <div className="logoContainer">
          <img src="./assets/img/logo.png" alt="" className="logo" />
          <img src="./assets/img/logo2.png" alt="" className="logo2" />
        </div>
      </div>
      <main className="header__main">
        <div className="header__main-bg"></div>
        <h1 className="title">{conference.title}</h1>
        <h2 className="title">
          {conference.edition}
          <br />
          {conference.topic}
        </h2>
        <Timer endtime={conference.startsAt} />
        <Button link={REGISTRATION_LINK} text="Регистрация" />
      </main>
    </header>
  );
};

export default Header;
