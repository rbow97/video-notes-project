import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue("");
  }, []);

  if (inputValue && inputValue.includes("=")) {
    const url = inputValue.split("=");
  }

  return (
    <div className="App">
      <form>
        <label>URL:</label>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          value={inputValue}
        />
      </form>
      <div id="player"></div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/h0U2QUGKbSE"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default App;
