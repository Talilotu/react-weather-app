import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <form className="input-group">
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
            <p className="mb-0">Sunday 23:26</p>
            <p>Cloudy</p>
            <div className="row temperature">
              <div className="col-5">
                <h3>10°C</h3>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: 64%</li>
                  <li>Wind: 7 km/h</li>
                </ul>
              </div>
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
              <div className="row">
                <div className="col-3">Tue</div>
                <div className="col-3">12°</div>
                <div className="col-3">img</div>
                <div className="col-3">8°</div>
              </div>
              <div className="row">
                <div className="col-3">Tue</div>
                <div className="col-3">12°</div>
                <div className="col-3">img</div>
                <div className="col-3">8°</div>
              </div>
              <div className="row">
                <div className="col-3">Tue</div>
                <div className="col-3">12°</div>
                <div className="col-3">img</div>
                <div className="col-3">8°</div>
              </div>
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
}
