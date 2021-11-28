const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    const townsFiltered = towns.filter((x) => x.name.includes("Fish Haven"));
    let length = townsFiltered[0].events.length;
    for (let i = 0; i < length; i++ ){
      let townEvent = document.createElement("li");
      townEvent.textContent = townsFiltered[0].events[i];
      document.querySelector("ul.town-event").appendChild(townEvent);
    
  }});