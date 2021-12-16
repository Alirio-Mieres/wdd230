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
    //const listForecast = jsObject.list.filter((d) => d.dt_txt.includes("18:00:00"));

    //Current temp
    document.querySelector("#description").textContent = jsObject.current.weather[0].description;
    document.querySelector("#temperature").textContent = Math.round(jsObject.current.temp);
    document.querySelector("#humidity").textContent = `${jsObject.current.humidity}%`;


    //Forecast
    //let weatherforecast = jsObject
    for (let i = 0; i < 3; i++) {
      //document.querySelector(`#temp${[i]}`).innerHTML = `${Math.round(listForecast[i].main.temp)} °F`;
      document.querySelector(`#temp${[i]}`).innerHTML = `${Math.round(jsObject.daily[i].temp.day)} °F`;
      
      const images = `http://openweathermap.org/img/wn/${jsObject.daily[i].weather[0].icon}.png`;
      const description = jsObject.daily[i].weather[0].description;
      
      document.querySelector(`#img${[i]}`).setAttribute("src", images);
      document.querySelector(`#img${[i]}`).setAttribute("alt", description);
    }
  });

  //changesssss
  /*var forecastAPI =// 'https://api.openweathermap.org/data/2.5/onecall?lat=9.5825&lon=123.7503&exclude=minutely,hourly&units=metric&appid=3a67fda6cacce3953a8654a8c414649c';

fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject) => {
      
      for (i = 0; i < 3; i++) {
          const desc = jsObject.daily[i].weather[0].description;
          document.getElementById("day" + (i+1) + "Temp").textContent = jsObject.daily[i].temp.day.toFixed(0); // temperature
          document.getElementById("img" + (i+1)).src = "https://openweathermap.org/img/wn/" + jsObject.daily[i].weather[0].icon + '@2x.png'; // icons
          document.getElementById("img" + (i+1)).setAttribute('alt', desc); // description
    }

});

//changes
/*OneCall Weather API for Hartselle, Alabama*/

/*const today = new Date();
const options = { weekday: "short" };
let forecastDay0 = new Intl.DateTimeFormat("en-US", options).format(
  today.getTime() + 86400000
);
let forecastDay1 = new Intl.DateTimeFormat("en-US", options).format(
  today.getTime() + 86400000 * 2
);
let forecastDay2 = new Intl.DateTimeFormat("en-US", options).format(
  today.getTime() + 86400000 * 3
);
let forecastDay = [forecastDay0, forecastDay1, forecastDay2];
for (let i = 0; i < 3; i++) {
  document.getElementById(`forecast-day${[i]}`).textContent = forecastDay[i];
}

const apiURL =
  //"https://api.openweathermap.org/data/2.5/onecall?lat=34.443432&lon=-86.9358&exclude=minutely,hourly&appid=c92a67dfadc88b3df96c476977e17cb8&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    document.querySelector("#currently").textContent =
      jsObject.daily[0].weather[0].description.toUpperCase();
   
      document.querySelector("#current-temperature").textContent = Math.round(
      jsObject.current.temp
    );
    
    document.querySelector("#humidity").textContent = Math.round(
      jsObject.daily[0].humidity
    );


    let forecast = jsObject.daily[0].temp.day;
    for (let j = 1; j < 4; j++) {
      document.querySelector(`#forecast-temp${[j]}`).innerHTML = `${Math.round(
        jsObject.daily[j].temp.day
      )} &#8457`;
      const imagesrc = `//openweathermap.org/img/wn/${jsObject.daily[j].weather[0].icon}.png`;
      const forecastDescription = jsObject.daily[j].weather[0].description;

      document
        .querySelector(`#forecast-icon${[j]}`)
        .setAttribute("src", imagesrc);
      document
        .querySelector(`#forecast-icon${[j]}`)
        .setAttribute("alt", forecastDescription);
    }*/
