import React from "react";
import Quote from "./components/quote";

import "./App.css";

function App() {
  const theQuote = "Covid-19 is afraid of being caught by Chuck Norris";
  return (
    <div className="App">
      <header className="App-header">
        <p> Chuck says</p>
      </header>
      <div className="Quotes">
        {" "}
        <Quote quote={theQuote} />{" "}
      </div>
    </div>
  );
}

export default App;
