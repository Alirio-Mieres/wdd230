const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=4b98d1ee85ba9dea6016b5a7682cce3f&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let t = jsObject.main.temp;
    let s = jsObject.wind.speed;
    let windchill = 35.74 + (0.6215 * t) - (35.75 *(s ** 0.16)) + (0.4275 * t * (s ** 0.16));

    console.log(jsObject);
    document.getElementById('description').textContent = jsObject.weather[0].description;
    document.getElementById('temperature').textContent = `${jsObject.main.temp}`;
    document.getElementById('humidity').textContent = `${jsObject.main.humidity} %`;
    document.getElementById('windspeed').textContent = `${jsObject.wind.speed}`;
    if (t <= 50 && s > 3) {
        document.querySelector('#windchill').textContent = `${Math.round(windchill)} °F`;
    }
    
    else {
        windchill = 'N/A';
        document.querySelector('#windchill').textContent = windchill;
    }
    
  });


const mydate = new Date();

const todayDayNumber = mydate.getDay();


const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";


const forecastURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=4b98d1ee85ba9dea6016b5a7682cce3f&units=imperial"

fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);

  let mylist = jsObject.list;
    let forecastDayNumber = todayDayNumber;

    for (i = 0; i < mylist.length; i++){
      let time = mylist[i].dt_txt;

      if (time.includes("21:00:00")) {
         
        forecastDayNumber += 1;
        if (forecastDayNumber===7){forecastDayNumber = 0;}
        
        let theDayName = document.querySelector(".") 

        document.querySelector("")
      }
    }
  });

