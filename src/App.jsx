import React, { createContext } from "react";

import Committee from "./components/Committee";
import Contacts from "./components/Contacts/Contacts";
import Deadline from "./components/Deadline";
import Header from "./components/Header";
import Info from "./components/Info";
import PastConferences from "./components/PastConferences";
import Requirements from "./components/Requirements";
import Sections from "./components/Sections";
import YMap from "./components/Contacts/YMap";
import BurgerMenu from "./components/BurgerMenu";
import Gallery from "./components/Gallery";

import "./scss/app.scss";
import Program from "./components/Program";

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
