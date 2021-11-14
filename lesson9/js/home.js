const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const towns = jsonObject["towns"];
    towns.forEach((towns) => {
      if (towns.name === "Preston" || towns.name === "Soda Springs" || towns.name === "Fish Haven") {

        let townSection = document.createElement("section");
        let townName = document.createElement("h2");
        let motto = document.createElement("p");
        let yearFounded = document.createElement("p");
        let currentPopulation = document.createElement("p");
        let anualRainFall = document.createElement("p");
        let image = document.createElement("img");
        let townOrder = document.createElement("p");

        townName.textContent = `${towns.name}`;
        townSection.appendChild(townName);
        motto.textContent = `${towns.motto}`;
        townSection.appendChild(motto);
        
        yearFounded.textContent = `Year Founded: ${towns.yearFounded}`;
        townSection.appendChild(yearFounded);
        
        currentPopulation.textContent = `Population: ${towns.currentPopulation}`;
        townSection.appendChild(currentPopulation);
        
        anualRainFall.textContent = `Anual Rain Fall: ${towns.anualRainFall}`;
        townSection.appendChild(currentPopulation);


        image.setAttribute("src", `images/${towns.photo}`);
        image.setAttribute("alt", `Photo of ${towns.name}`);
        townSection.appendChild(image);

        if (towns.name === "Preston") {
          townSection.setAttribute("class", "preston-twon");
          townSection.appendChild(townOrder);

        } else if (towns.name === "Soda Springs") {
          townSection.setAttribute("class", "soda-twon");
          townSection.appendChild(townOrder);

        } else if (towns.name === "Fish Haven") {
          townSection.setAttribute("class", "fish-twon");
          townSection.appendChild(townOrder);
        }
        document.querySelector("div.cards").appendChild(townSection);
      }
    });
  });
