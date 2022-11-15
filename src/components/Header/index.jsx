import React from "react";
import Timer from "./Timer";
import Button from "../UI/Button";
import { BurgerContext } from "../../App";

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
        <img src="./assets/img/logo.png" alt="" className="logo" />
      </div>
      <main className="header__main">
        <div className="header__main-bg"></div>
        <h1 className="title">«SOCIAL SCIENCE» (Общественные науки)</h1>
        <h2 className="title">
          V МЕЖДУНАРОДНАЯ НАУЧНО-ПРАКТИЧЕСКАЯ КОНФЕРЕНЦИЯ
          <br />
          «СТРАТЕГИИ РАЗВИТИЯ ОБЩЕСТВА И ЭКОНОМИКИ В НОВОЙ РЕАЛЬНОСТИ»
        </h2>
        <Timer endtime={"2023-10-19T10:00:00"} />
        <Button
          link={"https://forms.gle/SFaoJRiU1CS4Ni2h9"}
          text={"Регистрация"}
        />
      </main>
    </header>
  );
};

export default Header;
