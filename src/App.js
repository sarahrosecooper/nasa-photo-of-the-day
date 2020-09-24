import React from "react";
import "./App.css";
import Header from "./components/Header";
import IncomingData from "./components/IncomingData";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>

      <Header />
      <IncomingData />
    </div>
  );
}

export default App;
