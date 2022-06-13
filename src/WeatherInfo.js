import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row wrap">
        <div className="col-4 current-props.data bottom-sections">
          <h2>{props.data.city}</h2>
          <p className="date">
            <FormattedDate date={props.data.date} />
          </p>
          <p className="description">{props.data.description}</p>
          <div className="row temperature">
            <div className="col-4">
              <span className="main-temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units-symbol">°C</span>
            </div>
            <div className="col-8">
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {Math.round(props.data.wind)} km/h</li>
              </ul>
            </div>
          </div>
          <div className="weather-icon">
            <WeatherIcon code={props.data.icon} />
          </div>
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
  );
}
