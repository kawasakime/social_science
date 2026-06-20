import React, { createContext, useEffect, useState } from "react";

import Committee from "./components/Committee";
import Contacts from "./components/Contants/Contacts";
import Deadline from "./components/Deadline";
import Header from "./components/Header";
import Info from "./components/Info";
import PastConferences from "./components/PastConferences";
import Requirements from "./components/Requirements";
import Sections from "./components/Sections";
import YMap from "./components/Contants/YMap";
import BurgerMenu from "./components/BurgerMenu";
import Gallery from "./components/Gallery";

import "./scss/app.scss";
import Program from "./components/Program";

export const BurgerContext = createContext();

const ACCESS_LOGIN = 'admin123@';

function App() {
  const [burgerIsOpen, setBurgerIsOpen] = React.useState(false);

  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    if (hasAccess) {
      return;
    }

    const login = window.prompt('Введите код доступа');

    if (login === ACCESS_LOGIN) {
      setHasAccess(true);
      return;
    }

    window.alert('Неверный код доступа!');
  }, [hasAccess]);

  if (!hasAccess) {
    return null;
  }

  return (
    <div className="App">
      <BurgerContext.Provider value={{ burgerIsOpen, setBurgerIsOpen }}>
        <BurgerMenu />
        <Header />
      </BurgerContext.Provider>
      <Info />
      <Program />
      <Committee />
      <Sections />
      <Deadline />
      <Requirements />
      <PastConferences />
      <Gallery />
      <Contacts>
        <YMap />
      </Contacts>
    </div>
  );
}

export default App;
