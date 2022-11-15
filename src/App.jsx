import React, { createContext } from "react";

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

import "./scss/app.scss";
import Gallery from "./components/Gallery";
export const BurgerContext = createContext();

function App() {
  const [burgerIsOpen, setBurgerIsOpen] = React.useState(false);
  return (
    <div className="App">
      <BurgerContext.Provider value={{ burgerIsOpen, setBurgerIsOpen }}>
        <BurgerMenu />
        <Header />
      </BurgerContext.Provider>
      <Info />
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
