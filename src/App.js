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
        <Quote />{" "}
      </div>
    </div>
  );
}

export default App;
