const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=4b98d1ee85ba9dea6016b5a7682cce3f&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let t = jsObject.main.temp;
    let s = jsObject.wind.speed;
    let windchill = 35.74 + (0.6215 * t) - (35.75 *(s ** 0.16)) + (0.4275 * t * (s ** 0.16));

    console.log(jsObject);
    document.getElementById('description').textContent = jsObject.weather[0].description;
    document.getElementById('temperature').textContent = `${Math.round(jsObject.main.temp)}`;
    document.getElementById('humidity').textContent = `${jsObject.main.humidity} %`;
    document.getElementById('windspeed').textContent = `${Math.round(jsObject.wind.speed)}`;
    if (t <= 50 && s > 3) {
        document.querySelector('#windchill').textContent = `${Math.round(windchill)} °F`;
    }
    
    else {
        windchill = 'N/A';
        document.querySelector('#windchill').textContent = windchill;
    }
    
  });


