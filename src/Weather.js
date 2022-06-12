import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather mt-5">
      <div className="top-section">
        <div className="row">
          <div className="col-2">
            <button>Current</button>
          </div>
          <div className="col-8">
            <form>
              <input type="search" placeholder="Enter a city"></input>
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
          <div className="col-2">
            <div className="row">
              <div className="col-1">°C</div>
              <div className="col-1">°F</div>
            </div>
          </div>
        </div>
      </div>
      <div className="display-weather mt-5">
        <div className="row">
          <div className="col-6 current-weather bottom-sections">
            <h2>New Zealand</h2>
            <p>Sunday 23:26</p>
            <p>Cloudy</p>
            <div className="row ">
              <div className="col-2">
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
          <div className="col-6 forecast bottom-sections">
            <h4>5 DAY FORECAST</h4>
            <div className="row">
              <div className="row">
                <div className="col-2">Tue</div>
                <div className="col-2">12°</div>
                <div className="col-2">img</div>
                <div className="col-2">8°</div>
              </div>
              <div className="row">
                <div className="col-2">Tue</div>
                <div className="col-2">12°</div>
                <div className="col-2">img</div>
                <div className="col-2">8°</div>
              </div>
              <div className="row">
                <div className="col-2">Tue</div>
                <div className="col-2">12°</div>
                <div className="col-2">img</div>
                <div className="col-2">8°</div>
              </div>
              <div className="row">
                <div className="col-2">Tue</div>
                <div className="col-2">12°</div>
                <div className="col-2">img</div>
                <div className="col-2">8°</div>
              </div>
              <div className="row">
                <div className="col-2">Tue</div>
                <div className="col-2">12°</div>
                <div className="col-2">img</div>
                <div className="col-2">8°</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
