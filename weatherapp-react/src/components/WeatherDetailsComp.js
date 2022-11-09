import React from "react";

function WeatherDetailsComp({description,humidity,speed}) {
  return (
    <div>
      <div className="flex">
        <div className="description">{description}</div>
      </div>
      <div className="humidity">Humidity: {humidity}%</div>
      <div className="wind">Wind speed: {speed}km/h</div>
    </div>
  );
}

export default WeatherDetailsComp;
