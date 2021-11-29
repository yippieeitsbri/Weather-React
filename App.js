/** @format */

import React from "react";
import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [search, setSearch] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState("");

  function displayWeather(response) {
    setLoaded(true);
    setCity({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bf54175800a55e59e6c4d6461deeef12&units=imperial`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setSearch(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city"
        onChange={updateCity}
      ></input>
      <input type="submit" value="Search"></input>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(city.temperature)}°C</li>
          <li>Humidity: {city.humidity} %</li>
          <li>Wind: {Math.round(city.wind)} km/h</li>
          <li>
            <img src={city.icon} alt="WeatherIcon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
