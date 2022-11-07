const API_KEY = "a0bb3a3ae250c7fd303d90a75131f24f";
function getCoordintes() {
  function getCurrLocName(lat, lon, API_KEY) {
    fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return res.json();
      })
      .then((data) => displayWeather(getName(data), API_KEY));
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;
    var lat = crd.latitude.toString();
    var lng = crd.longitude.toString();
    getCurrLocName(lat, lng, API_KEY);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
}

getCoordintes();

function getName(data) {
  const { name } = data[0];
  return name;
}

function displayWeather(name, API_KEY) {
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
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
    });
}


 function getWeather() {
  let name = document.querySelector(".search-bar").value;
  displayWeather(name,API_KEY)
};


