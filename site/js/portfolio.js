const avatar = document.querySelector(".dev-avatar-img");

avatar.addEventListener("click", () => {
    avatar.src = "./image/avatar-bis.svg";
})

const devName = document.querySelector("#name");
const changeButton = document.querySelector(".modify");

// changeButton.addEventListener("click", (e) => {
//     devName.innerHTML = prompt("Enter your Name");
// })


// const colorBackground = document.querySelector(".pink-bg");
//
// changeButton.addEventListener("click", (e) => {
//     colorBackground.style.backgroundColor = prompt("Enter your Color");
//     devName.innerHTML = prompt("Enter your Name");
// })

// const colorAllBackground = document.getElementsByClassName('pink-bg');


const colorAllBackground = document.getElementsByClassName('pink-bg');
const colorAllText = document.getElementsByClassName('pink-text');
const colorAllTags = document.getElementsByTagName("a");

changeButton.addEventListener("click", (e) => {
    const color = prompt("Enter your Color");
    devName.innerHTML = prompt("Enter your Name");
    for (let i = 0; i < colorAllBackground.length; i++) {
        colorAllBackground[i].style.backgroundColor = color;
    }
    for (let i = 0; i < colorAllText.length; i++) {
        colorAllText[i].style.color = color;
    }
    for (let i = 0; i < colorAllTags.length; i++) {
        colorAllTags[i].style.color = color;
    }
})


const ulElements = document.querySelector("#front-dev-tools");
const childElem = ulElements.querySelectorAll('*')
const modifySkills = document.querySelector(".modify-skills");
const newSkills = ["VSCode", "GitHub", "Termional"];

modifySkills.addEventListener("click", () => {
    for (let i = 0; i < childElem.length; i++) {
        ulElements.removeChild(childElem[i]);
    }
    for (let i = 0; i < newSkills.length; i++) {
        const newSkillsElem = document.createElement("li");
        newSkillsElem.innerHTML = newSkills[i];
        ulElements.appendChild(newSkillsElem);
    }
})


const form = document.querySelector("#form");
const input = document.querySelector("#addskill");
const skillsList = document.querySelector("#dev-tools-back-list");

form.onsubmit = (event) => {
    event.preventDefault();
    const newSkillItem = document.createElement("li");
    newSkillItem.innerHTML = input.value;
    skillsList.appendChild(newSkillItem);
    input.value = "";
};




