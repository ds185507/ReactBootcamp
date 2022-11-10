import React from 'react'

function WeatherCityTitleComp({name}) {
  return (
    <div>
        <h2 className="city">Weather in {name}</h2>
    </div>
  )
}

export default WeatherCityTitleComp