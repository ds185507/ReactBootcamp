import React from "react";
import WeatherCityTitleComp from "./WeatherCityTitleComp";
import WeatherImageComp from "./WeatherImageComp";
import WeatherTempComp from "./WeatherTempComp";
import WeatherDetailsComp from "./WeatherDetailsComp";
import WeatherLoadingComponent from "./WeatherLoadingComponent";
import WeatherErrorComp from "./WeatherErrorComp";
import "../index.css"

function WeatherInfoComp({cityData,flag}) {
  if(cityData===null || flag===0) return (<div>
    <WeatherLoadingComponent />
  </div>);

  const{name,icon,description,temp,humidity,speed} = cityData;

  return (flag===1) ? (
    <div className= "info">
      <WeatherCityTitleComp name={name} />
      <WeatherImageComp icon={icon} />
      <WeatherTempComp temp={temp}/>
      <WeatherDetailsComp description={description} humidity ={humidity} speed={speed} />
    </div>
  ) : <WeatherErrorComp />
  ;
}


export default WeatherInfoComp;
