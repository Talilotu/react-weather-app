import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">React Weather App</h1>
        <Weather defaultCity="Sydney" />

        <footer>
          This project was coded by{" "}
          <a href="https://shiny-pie-937396.netlify.app/" target="blank">
            Akanesi Tohotoa
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Talilotu/react-weather-app"
            target="blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
