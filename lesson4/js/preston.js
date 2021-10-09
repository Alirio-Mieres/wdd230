function toggleMenu() {

  document.querySelector("#primaryNav").classList.toggle("hide");
}


document.querySelector("#copyrightyear").textContent = new Date().getFullYear();;

let event = new Date();

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let date = event.toLocaleDateString('en-UK', options);

document.querySelector("#lastupdated").textContent = date;