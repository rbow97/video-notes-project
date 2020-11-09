import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const App = () => {
  const { inputValue, setInputValue } = useState("");

  if (inputValue) {
    console.log("test");
  }
  console.log("rose");

  return (
    <div className="App">
      <form>
        <label>
          URL:
          <input type="text" name="name" />
        </label>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="submit"
          value={inputValue}
        />
      </form>
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
