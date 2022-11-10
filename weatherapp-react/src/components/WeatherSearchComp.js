import React,{useState} from 'react'
import WeatherSearchBar from './WeatherSearchBar'
import WeatherSearchButton from './WeatherSearchButton'
import "../index.css"

function WeatherSearchComp({myFunction}) {
   const [city,setCity] = useState("");
  return (
     <div className="search">
        <WeatherSearchBar city={city} setCity={setCity} />
        <WeatherSearchButton city={city} myFunction={myFunction}/>
     </div>   
  )
}

export default WeatherSearchComp