import React from "react";
import Quote from "./components/quote";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Chuck says</p>
      </header>
      <div className="Quotes">
        {" "}
        <Quote text="aaaaaa" />{" "}
        {" Covid-19 is afraid of being caught by Chuck Norris"}
      </div>
    </div>
  );
}

export default App;
