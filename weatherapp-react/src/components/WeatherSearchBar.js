import React,{useState} from 'react'
import SearchBar from './WeatherNameBar'
import SearchButton from './WeatherSearchButton'
import "../index.css"

function WeatherSearchBar({myFunction}) {
   const [city,setCity] = useState("");
  return (
     <div className="search">
        <SearchBar city={city} setCity={setCity} />
        <SearchButton city={city} myFunction={myFunction}/>
     </div>   
  )
}

export default WeatherSearchBar