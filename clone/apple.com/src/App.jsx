// import { useState } from "react";
import "./App.css";
import CountrySelector from "./components/CountrySelector";
import MainNavigation from "./components/navigation/MainNavigation";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="fixed w-full">
          <CountrySelector />
          <MainNavigation />
        </div>
      </header>
    </>
  );
}

export default App;
