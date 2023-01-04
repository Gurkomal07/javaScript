/*
HTML Structure 

<div class="mt-2 card" >
  <div class="card-body">
    <h5 class="card-title">CITY_NAME_HERE, COUNTRY_CODE_HERE</h5>
    <h6 class="card-subtitle mb-2 text-muted">CURRENT_WEATHER_DEGREES_HERE</h6>
    <p class="card-text">WEATHER_DESCRIPTION_HERE</p>
  </div>
</div>

*/

// renderWeather function
const renderWeather = (WeatherInfo, innerElement) => {
  let element = `<div class="mt-2 card" >
  <div class="card-body">
    <h5 class="card-title">${WeatherInfo.name}, ${WeatherInfo.sys.country}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${WeatherInfo.main.temp}</h6>
    <p class="card-text">${WeatherInfo.weather[0].description}</p>
  </div>
</div>`

innerElement.innerHTML = element
}

// export the renderWeather function
export { renderWeather }
