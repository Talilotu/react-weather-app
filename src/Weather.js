import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  //const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  //const [weather, setWeather] = useState({});

  function handleSubmit(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setReady(true);
  }

  //function updateCity(event) {
  // setCity(event.target.value);

  if (ready) {
    return (
      <div className="Weather mt-5">
        <div className="top-section">
          <div className="row">
            <div className="col-2">
              <button className="btn btn-outline-primary current-location">
                Current
              </button>
            </div>
            <div className="col-8">
              <form onSubmit={handleSubmit} className="input-group">
                <input
                  type="search"
                  placeholder="Enter a city"
                  autoFocus="on"
                  className="form-control"
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary search"
                />
              </form>
            </div>
            <div className="col">
              <div className="row units-button">
                <div className="col-1 celsius-symbol">
                  <button className="units">°C</button>
                </div>
                <div className="col-2 celsius-symbol">
                  <button className="units">°F</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="display-weather">
          <div className="row wrap">
            <div className="col-4 current-weather bottom-sections">
              <h2>New Zealand</h2>
              <p className="mb-0">
                <FormattedDate date={weather.date} />
              </p>
              <p>{weather.description}</p>
              <div className="row temperature">
                <div className="col-5">
                  <h3>{Math.round(weather.temperature)}°C</h3>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Humidity: {weather.humidity}%</li>
                    <li>Wind: {weather.wind} km/h</li>
                  </ul>
                </div>
              </div>
              <img src={weather.icon} alt={weather.description} width="150" />
            </div>
            <div className="col-4  forecast-column bottom-sections">
              <h4>5 DAY FORECAST</h4>
              <div className="row forecast">
                <div className="row">
                  <div className="col-3">Tue</div>
                  <div className="col-3">12°</div>
                  <div className="col-3">img</div>
                  <div className="col-3">8°</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f5098deaf242be7ff2c5af1ac2ce51ad";
    const units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleSubmit);

    return "Loading...";
  }
}
