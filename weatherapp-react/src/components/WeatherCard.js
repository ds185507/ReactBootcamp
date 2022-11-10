import React, { useState } from "react";
import "../index.css";
import WeatherSearchComp from "./WeatherSearchComp";
import WeatherInfoComp from "./WeatherInfoComp";
import config from "../config";

const API_KEY = config.WEATHER_KEY;

function WeatherCard() {
  function getCoordintes() {
    function getCurrLocName(lat, lon, API_KEY) {
      fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
      )
        .then((res) => {
          if (!res.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return res.json();
        })
        .then((data) => getWeather(data[0].name, API_KEY));
    }

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      var crd = pos.coords;
      var lat = crd.latitude.toString();
      var lng = crd.longitude.toString();
      getCurrLocName(lat, lng, API_KEY);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  function getWeather(name) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          setFlag(2)
        }
        return res.json();
      })
      .then((data) => {
        //   console.log(data)
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        data = {
          name,
          icon,
          description,
          temp,
          humidity,
          speed,
        };

        setData(data);
        setFlag(1);
      });
  }

  const [flag, setFlag] = useState(0);
  //0 -> loading path
  //1 -> valid input
  //2 -> invalid input
  const [data, setData] = useState(null);

  if (flag===0) getCoordintes();

  return (
    <div className="card">
      <WeatherSearchComp myFunction={getWeather} className="search" />
      <WeatherInfoComp cityData={data} flag={flag} />
    </div>
  );
}

export default WeatherCard;
