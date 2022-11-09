import React,{useState} from 'react'
import "../index.css"
import WeatherSearchBar from './WeatherSearchBar'
import WeatherInfoComp from './WeatherInfoComp'
import config from '../config'

const API_KEY = config.WEATHER_KEY;
// const API_KEY = config.WEATHER_KEY;
// let citydata = null;

// function getCoordintes() {

//   function getCurrLocName(lat, lon, API_KEY) {
//     fetch(
//       `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
//     )
//       .then((res) => {
//         if (!res.ok) {
//           alert("No weather found.");
//           throw new Error("No weather found.");
//         }
//         return res.json();
//       })
//       .then((data) => getWeather(getName(data), API_KEY));
//   }

//   var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   };

//   function success(pos) {
//     var crd = pos.coords;
//     var lat = crd.latitude.toString();
//     var lng = crd.longitude.toString();
//     getCurrLocName(lat, lng, API_KEY);
//   }

//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }

//   navigator.geolocation.getCurrentPosition(success, error, options);
// }

// getCoordintes();

function WeatherCard() {
  // function getName(data) {
  //   const { name } = data[0];
  //   return name;
  // }
  
  function getWeather(name) {

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return res.json();
      })
      .then((data) => {
        //   console.log(data)
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
  
        data ={
          name,
          icon,
          description,
          temp,
          humidity,
          speed
        }
  
        setData(data)
        setFlag(false)
      });
  }

  const[flag,setFlag] = useState(true); //true means => load the loading comp
  const[data,setData] = useState(null);

  return (
    <div className="card">
        <WeatherSearchBar myFunction = {getWeather} className="search"/>
        <WeatherInfoComp  cityData = {data} flag = {flag} />
    </div>
  )
}


export default WeatherCard