import React from "react";
import Timer from "./Timer";
import Button from "../UI/Button";
import { BurgerContext } from "../../App";
import { REGISTRATION_LINK } from "../../constants";

const Header = (props) => {
  const burgerRef = React.useRef();
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
        <h1 className="title">«SOCIAL SCIENCE (Общественные науки)»</h1>
        <h2 className="title">
          VI МЕЖДУНАРОДНАЯ НАУЧНО-ПРАКТИЧЕСКАЯ КОНФЕРЕНЦИЯ
          <br />
          «СТРАТЕГИИ РАЗВИТИЯ ОБЩЕСТВА И ЭКОНОМИКИ В НОВОЙ РЕАЛЬНОСТИ»
        </h2>
        <Timer endtime={"2024-10-17T10:00:00"} />
        <Button
          link={REGISTRATION_LINK}
          text={"Регистрация"}
        />
      </main>
    </header>
  );
};

export default Header;
