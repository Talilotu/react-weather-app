import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
            <form onSubmit={handleSubmit} className="input-group">
              <input
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
                className="form-control"
                onChange={updateCity}
              />
              <input type="submit" value="Search" className="btn search" />
            </form>
          </div>
        </div>
        <div className="display-weather">
          <div className="row wrap">
            <div className="col-4 current-props.data bottom-sections">
              <h2>{weather.city}</h2>
              <p className="date">
                <FormattedDate date={weather.date} />
              </p>
              <p className="description">{weather.description}</p>
              <div className="row temperature">
                <div className="col-4">
                  <span className="main-temperature">
                    {Math.round(weather.temperature)}
                  </span>
                  <span className="units-symbol">°C</span>
                </div>
                <div className="col-8">
                  <ul>
                    <li>Humidity: {weather.humidity}%</li>
                    <li>Wind: {Math.round(weather.wind)} km/h</li>
                  </ul>
                </div>
              </div>
              <div className="weather-icon">
                <WeatherIcon code={weather.icon} size={100} color="#f3933d" />
              </div>
            </div>
            <div className="col-4 bottom-sections">
              <h4>5 DAY FORECAST</h4>
              <div className="row forecast">
                <div className="row">
                  <div className="col-3">Tue</div>
                  <div className="col-3">12°</div>
                  <div className="col-3">
                    <WeatherIcon code="01d" size={30} color="#38385e" />
                  </div>
                  <div className="col-3">8°</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
