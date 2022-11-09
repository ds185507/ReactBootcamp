import React from "react";
import CityTitleComp from "./WeatherCityTitleComp";
import WeatherImageComp from "./WeatherImageComp";
import WeatherTempComp from "./WeatherTempComp";
import WeatherDetailsComp from "./WeatherDetailsComp";
import LoadingComponent from "./WeatherLoadingComponent";
import "../index.css"

function WeatherInfoComp({cityData,flag}) {
  if(cityData==null) return (<div>
    <LoadingComponent />
  </div>);

  const{name,icon,description,temp,humidity,speed} = cityData;

  return (!flag) ? (
    <div className= "info">
      <CityTitleComp name={name} />
      <WeatherImageComp icon={icon} />
      <WeatherTempComp temp={temp}/>
      <WeatherDetailsComp description={description} humidity ={humidity} speed={speed} />
    </div>
  ) : <LoadingComponent />
  ;
}


export default WeatherInfoComp;
