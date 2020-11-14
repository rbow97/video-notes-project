import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  let videoId = "";
  let url = "";
  let videoText = " ";

  useEffect(() => {
    setInputValue("");
  }, []);

  if (inputValue && inputValue.includes("=")) {
    url = inputValue.split("=");
    videoId = url[1];
    videoText = `https://www.youtube.com/embed/${videoId}`;
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
        <input type="submit" value="Submit"></input>
      </form>
      <div id={videoId}>
        <iframe
          width="560"
          height="315"
          src={videoText}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default App;
