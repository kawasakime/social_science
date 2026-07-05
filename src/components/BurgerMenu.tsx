import React from "react";
import { BurgerContext } from "../App";
import { navigationItems } from "../data/site";

const BurgerMenu = () => {
  const { burgerIsOpen, setBurgerIsOpen } = React.useContext(BurgerContext);

  function handleClickCloseBurgerBtn() {
    setBurgerIsOpen(false);
  }

  return (
    <div className={`burger-menu${burgerIsOpen ? " active" : ""}`}>
      <div className="bg"></div>
      <div className="burger-menu__panel">
        <div className="close" onClick={handleClickCloseBurgerBtn}></div>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.link} onClick={handleClickCloseBurgerBtn}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
