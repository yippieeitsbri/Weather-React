/** @format */

import React from "react";
import "./styles.css";

export default function Forecast() {
  return (
    <div className="weather-forecast" id="forecast">
      <div className="row">
        <div className="col-2">
          <div className="weather-forecast-date">
            <img
              src="http://openweathermap.org/img/wn/50d@2x.png"
              alt=""
              width="42"
            />

            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">72°</span>
              <span className="weather-forecast-temperature-min">58°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
