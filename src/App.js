import Committee from "./components/Committee";
import Header from "./components/Header";
import Info from "./components/Info";
import Sections from "./components/Sections";

import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Committee />
      <Sections />
    </div>
  );
}

export default App;
