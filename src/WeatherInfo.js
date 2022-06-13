import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="display-weather">
      <div className="row wrap">
        <div className="col-4 current-props.data bottom-sections">
          <h2>{props.data.city}</h2>
          <p>
            <FormattedDate date={props.data.date} />
          </p>
          <p className="description">{props.data.description}</p>
          <div className="row temperature">
            <div className="col-2">
              <h3>{Math.round(props.data.temperature)}</h3>
              <span className="units-symbol">°C</span>
            </div>
            <div className="col-8">
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
          </div>
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="weather-icon"
            width="150"
          />
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
