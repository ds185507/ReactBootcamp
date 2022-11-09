import React from 'react'

function WeatherTempComp({temp}) {
  return (
    <div> <h1 className="temp">{temp}°C</h1></div>
  )
}

export default WeatherTempComp