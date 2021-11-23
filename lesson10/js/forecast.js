const day = new Date();
const format = { weekday: "short" };
let forecast0 = new Intl.DateTimeFormat("en-US", format).format(day.getTime() + 86400000);
let forecast1 = new Intl.DateTimeFormat("en-US", format).format(day.getTime() + 172800000);
let forecast2 = new Intl.DateTimeFormat("en-US", format).format(day.getTime() + 259200000);
let forecast3 = new Intl.DateTimeFormat("en-US", format).format(day.getTime() + 345600000);
let forecast4 = new Intl.DateTimeFormat("en-US", format).format(day.getTime() + 432000000);

let forecast = [forecast0, forecast1, forecast2, forecast3, forecast4,];

for (let i = 0; i < 5; i++) {
  document.getElementById(`day${[i]}`).textContent = forecast[i];
}

const forecastURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=4b98d1ee85ba9dea6016b5a7682cce3f&units=imperial"

fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const listForecast = jsObject.list.filter((d) => d.dt_txt.includes("18:00:00"));
    for (let i = 0; i < 5; i++) {
      document.querySelector(`#temp${[i]}`).innerHTML = `${listForecast[i].main.temp.toFixed(1)} °F`;
      
      const images = `http://openweathermap.org/img/w/${listForecast[i].weather[0].icon}.png`;
      const description = listForecast[i].weather[0].description;
      
      document.querySelector(`#img${[i]}`).setAttribute("src", images);
      document.querySelector(`#img${[i]}`).setAttribute("alt", description);
    }
  });