import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="row WeatherForecast">
      <div className="col-3">{day()}</div>
      <div className="col-3 max">{maxTemp()}°</div>
      <div className="col-3">
        <WeatherIcon
          code={props.data.weather[0].icon}
          size={30}
          color="#38385e"
        />
      </div>
      <div className="col-3 min">{minTemp()}°</div>
    </div>
  );
}
