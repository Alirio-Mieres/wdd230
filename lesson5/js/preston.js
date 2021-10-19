function toggleMenu() {

  document.querySelector("#primaryNav").classList.toggle("hide");
}

document.querySelector("#copyrightyear").textContent = new Date().getFullYear();;

let event = new Date();

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let date = event.toLocaleDateString('en-UK', options);

document.querySelector("#lastupdated").textContent = date;


const saturday = ["Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."];


document.querySelector("#message").textContent = saturday;

if(event.getDay() == 5){
  document.querySelector(".message").style.display = "block";
}