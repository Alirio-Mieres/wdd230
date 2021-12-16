document.querySelector("#copyrightyear").textContent = new Date().getFullYear();;

let commerce = new Date(document.lastModified);

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let date = commerce.toLocaleDateString('en-UK', options);

document.querySelector("#lastupdated").textContent = date;