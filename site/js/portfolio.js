const avatar = document.getElementById("avatar-container");
const avatar1 = document.getElementById("avatar1");
const avatar2 = document.getElementById("avatar2");

const btnName = document.getElementById("btnName");
const spanName = document.getElementById("name");
//const divDescription = document.getElementById("description");
const pinkBackground = document.getElementsByClassName("pink-bg");
const pinkText = document.getElementsByClassName("pink-text");
const links = document.getElementsByTagName("a");

const btnModify = document.getElementById("btnModify");
const liFrontendList = document.getElementsByClassName("front-dev-tools-li");

const btnAdd = document.getElementById("btnAdd");
const inputAdd = document.getElementById("inputAdd");
const backendList = document.getElementById("dev-tools-back-list");


// Eventlisteners

// toggle avatar
avatar.addEventListener("click", () => {
  avatar1.classList.toggle("display-none");  
  avatar2.classList.toggle("display-none");
});

// prompt name and color
btnName.addEventListener("click", () => {
  const name = prompt("Please enter your name");
  const color = prompt("Please enter your favorite color")
  spanName.innerText = name;
  spanName.style.color = "#fff";
  //divDescription.style.backgroundColor = color;

  for (el of pinkBackground) {
    el.style.backgroundColor = color;
  }

  for (el of pinkText) {
    el.style.color = color;
  }

  for (el of links) {
    el.style.color = color;
  }
});

// modify frontend list
btnModify.addEventListener("click", () => {
  const tools = ["VSCode", "Github", "Terminal"];
  for (let i=0; i<tools.length; i++) {
    liFrontendList[i].innerText = tools[i];
  }
});

// add new item to backend list
btnAdd.addEventListener("click", () => {
  const input = inputAdd.value;
  const newLi = document.createElement("li");
  newLi.innerText = input;
  backendList.appendChild(newLi);
  inputAdd.value = "";
})

