/** @format */

import React from "react";
import "./styles.css";

export default function Weather() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>Laguna Hills, CA</h2>
      <ul>
        <li>
          <div class="date" id="current-date"></div>
        </li>
        <span class="weekday" id="weekday">
          {" "}
        </span>
        <span class="time" id="time">
          {" "}
        </span>
        <strong />
      </ul>
      <center />
      <div class="col-8">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
          alt="sky"
          id="icon"
          class="now"
        />
        <br />
        <h2>75°F</h2>
      </div>
    </div>
  );
}
