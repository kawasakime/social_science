import React from "react";
import { BurgerContext } from "../App";
import { navigationItems } from "../data/site";

const BurgerMenu = () => {
  const { burgerIsOpen, setBurgerIsOpen } = React.useContext(BurgerContext);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    document.body.classList.toggle("burger-menu-open", burgerIsOpen);

    if (burgerIsOpen) {
      closeButtonRef.current?.focus();
    }

    return () => document.body.classList.remove("burger-menu-open");
  }, [burgerIsOpen]);

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setBurgerIsOpen(false);
      }
    }

    if (burgerIsOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [burgerIsOpen, setBurgerIsOpen]);

  function closeBurgerMenu() {
    setBurgerIsOpen(false);
  }

  return (
    <div className={`burger-menu${burgerIsOpen ? " active" : ""}`}>
      <button
        type="button"
        className="burger-menu__overlay"
        onClick={closeBurgerMenu}
        aria-label="Закрыть меню"
        tabIndex={burgerIsOpen ? 0 : -1}
      />
      <aside
        id="site-navigation"
        className="burger-menu__panel"
        aria-hidden={!burgerIsOpen}
        aria-label="Навигация по сайту"
      >
        <div className="burger-menu__header">
          <span>Меню</span>
          <button
            ref={closeButtonRef}
            type="button"
            className="burger-menu__close"
            onClick={closeBurgerMenu}
            aria-label="Закрыть меню"
            tabIndex={burgerIsOpen ? 0 : -1}
          />
        </div>
        <nav>
          <ul>
            {navigationItems.map((item) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  onClick={closeBurgerMenu}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  tabIndex={burgerIsOpen ? 0 : -1}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default BurgerMenu;
