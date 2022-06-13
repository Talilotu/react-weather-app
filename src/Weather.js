import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "f5098deaf242be7ff2c5af1ac2ce51ad";
    const units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather mt-5">
        <div className="top-section">
          <div className="row">
            <div className="col-3">
              <button className="btn btn-outline-primary current-location">
                Current <FontAwesomeIcon icon={faLocationDot} />
              </button>
            </div>
            <div className="col-7">
              <form onSubmit={handleSubmit} className="input-group">
                <input
                  type="search"
                  placeholder="Enter a city"
                  autoFocus="on"
                  className="form-control"
                  onChange={updateCity}
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
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
