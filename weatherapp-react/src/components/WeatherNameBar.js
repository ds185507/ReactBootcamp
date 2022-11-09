import React from "react";
import "../index.css";
function SearchBar({ city, setCity }) {
  return (
    <div>
      <input
        type="text"
        className="search-bar"
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
