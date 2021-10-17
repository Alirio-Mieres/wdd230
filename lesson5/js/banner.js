const saturday = ["Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."];

let date = new Date();

let currentDate;

currentDate = date.getDay();

if (currentDate == 5) {
  document.querySelector("#banner").textContent = saturday;
}

