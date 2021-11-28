const currentVisit = new Date().getTime(); 

const myStorage = window.localStorage;

if (myStorage.getItem("lastVisit")) {
  let previousVisit = myStorage.getItem("lastVisit");
  const numberOfDays = Math.trunc((currentVisit - previousVisit) / 86400000);
  document.querySelector(".last_visit_day").innerText = `Days since the last visit: ${numberOfDays}`;
} else {
  document.querySelector(".last_visit_day").innerText = `Days since the last visit: 0`;
}
myStorage.setItem("lastVisit", currentVisit);
