const day = new Date();
const format = { weekday: "short" };
let forecast0 = new Intl.DateTimeFormat("en-US", format).format(day.getTime() + 86400000);
let forecast1 = new Intl.DateTimeFormat("en-US", format).format(day.getTime() + 172800000);
let forecast2 = new Intl.DateTimeFormat("en-US", format).format(day.getTime() + 259200000);

let forecast = [forecast0, forecast1, forecast2];

for (let i = 0; i < 3; i++) {
  document.getElementById(`day${[i]}`).textContent = forecast[i];
}

const forecastURL = "//api.openweathermap.org/data/2.5/onecall?lat=8.2981&lon=-62.7186&exclude=minutely,hourly&appid=4b98d1ee85ba9dea6016b5a7682cce3f&units=imperial"

fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.querySelector("#description").textContent = jsObject.current.weather[0].description;
    document.querySelector("#temperature").textContent = Math.round(jsObject.current.temp);
    document.querySelector("#humidity").textContent = `${jsObject.current.humidity}%`;

    for (let i = 0; i < 3; i++) {
      document.querySelector(`#temp${[i]}`).innerHTML = `${Math.round(jsObject.daily[i].temp.day)} °F`;
      
      const images = `http://openweathermap.org/img/wn/${jsObject.daily[i].weather[0].icon}.png`;
      const description = jsObject.daily[i].weather[0].description;
      
      document.querySelector(`#img${[i]}`).setAttribute("src", images);
      document.querySelector(`#img${[i]}`).setAttribute("alt", description);
    }
  });

  