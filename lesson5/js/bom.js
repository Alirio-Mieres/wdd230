const list = document.querySelector(".list");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = function () {
  let myChapter = input.value;
  input.value = "";

  const listChapter = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listChapter.appendChild(listText);
  listText.textContent = myChapter;
  listChapter.appendChild(listBtn);
  listBtn.textContent = "❌";
  list.appendChild(listChapter);

  listBtn.onclick = function(e) {
    list.removeChild(listChapter);
  }

  input.focus();
}