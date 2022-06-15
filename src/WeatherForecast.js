import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState();

  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return <ForecastDay data={forecast[0]} />;
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let units = "metric";
    let apiKey = "f5098deaf242be7ff2c5af1ac2ce51ad";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showForecast);

    return null;
  }
}
