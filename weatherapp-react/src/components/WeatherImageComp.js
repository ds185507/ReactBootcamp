import React from "react";

function WeatherImageComp({icon}) {
    const url =`https://openweathermap.org/img/wn/${icon}.png`
  return (
    <div>
      <img  src= {url} alt="" />
    </div>
  );
}

export default WeatherImageComp;
